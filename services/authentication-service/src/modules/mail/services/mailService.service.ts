import { Injectable, Logger } from '@nestjs/common';
import { SES, SendRawEmailCommand } from '@aws-sdk/client-ses';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { default as mjml2html } from 'mjml';
import { compile } from 'handlebars';
import { readFileSync, existsSync } from 'fs';

import { resolve } from 'path';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private readonly transporter: nodemailer.Transporter;
  private readonly logger = new Logger(MailService.name);

  constructor() {
    this.transporter = process.env.USE_LOCAL_MAILER
      ? nodemailer.createTransport({
          host: process.env.MAILER_HOST,
          port: Number(process.env.MAILER_PORT) as number,
          secure: false, // true for 465, false for other ports
        })
      : nodemailer.createTransport({
          SES: {
            ses: new SES({
              apiVersion: '2010-12-01',
              credentialDefaultProvider: defaultProvider,
              region: process.env.AWS_REGION,
            }),
            aws: { SendRawEmailCommand },
          },
        });
  }

  private findMjmlTemplates(dirName = 'src/mjml'): {
    outputDir: string;
    parentDir: string;
  } {
    let parentDir = process.cwd();
    let outputDir = `${parentDir}/${dirName}`;

    while (!existsSync(`${parentDir}/${dirName}`)) {
      parentDir = resolve(parentDir, '..');

      // This is a garbage control flow...
      outputDir = `${parentDir}/${dirName}`;
    }

    return {
      outputDir,
      parentDir,
    };
  }

  public loadTemplateFromFile(filePath: string) {
    return readFileSync(filePath, 'utf8');
  }

  public async sendTemplatedMail<T>(
    to: string,
    subject: string,
    context: T,
    templateName: string,
  ) {
    const { outputDir } = this.findMjmlTemplates();
    await this.transporter.sendMail(
      {
        headers: { 'Return-Path': '<jbud@scylla.digital>' },
        to: to,
        subject: subject,
        html: this.compileMjml(`${outputDir}/${templateName}.mjml`, context),
        from: process.env.SES_SENDER_EMAIL,
      },
      (err) => {
        if (err) {
          Logger.error(err);
        }
      },
    );
  }

  private compileMjml<T>(template: string, data: T): string {
    const file = this.loadTemplateFromFile(template);

    console.log(file);
    const processedTemplate = compile<T>(file);

    const compiled = mjml2html(processedTemplate(data), {
      filePath: '',
      beautify: true,
      minify: false,
    });
    return compiled.html;
  }
}

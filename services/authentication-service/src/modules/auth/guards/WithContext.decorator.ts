import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const WithContext = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const gqlExecutionContext = GqlExecutionContext.create(ctx);
    const { req, reply } = gqlExecutionContext.getContext();

    return {
      req,
      reply,
    };
  },
);

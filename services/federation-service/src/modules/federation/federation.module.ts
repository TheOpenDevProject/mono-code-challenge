import { Global, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { IntrospectAndCompose } from '@apollo/gateway';

@Global()
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {
        cors: {
          credentials: true,
          origin: true,
          methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
          allowedHeaders:
            'Content-Type,Accept,Authorization,Access-Control-Allow-Origin',
        },
      },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'Authentication', url: 'http://localhost:8001/graphql' },
            { name: 'Advertising', url: 'http://localhost:8002/graphql' },
          ],
        }),
      },
    }),
  ],
})
export class FederationModule {}

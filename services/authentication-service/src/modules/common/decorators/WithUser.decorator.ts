import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const WithUser = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const mutatedRequest = GqlExecutionContext.create(context).getContext().req;

    if (!mutatedRequest.user) {
      throw new Error(
        '@WithUser() Decorator was bound to an incoming request that did not contain a user object, likely authentication failed higher up the call stack',
      );
    }

    return mutatedRequest.user;
  },
);

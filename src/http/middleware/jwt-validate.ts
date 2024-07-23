import { FastifyReply, FastifyRequest } from 'fastify';

export async function jwtValidate(req: FastifyRequest, res: FastifyReply) {
  try {
    const routeFreeList = ['POST-/singup', 'POST-/signin'];
    const validadeRoute = `${req.method}-${req.routeOptions.url}`;

    if (routeFreeList.includes(validadeRoute)) return;

    await req.jwtVerify();
  } catch (error) {
    return res.status(401).send({ message: 'Unauthorized' });
  }
}

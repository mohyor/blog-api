import { Request, Response } from 'express';

export function serverCheck(req: Request, res: Response): Response {
    return res.json('Server check!');
}
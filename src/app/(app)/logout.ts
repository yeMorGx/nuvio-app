// src/pages/api/auth/logout.ts
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '@/lib/session';
import { NextApiRequest, NextApiResponse } from 'next';

function logoutRoute(req: NextApiRequest, res: NextApiResponse) {
  req.session.destroy(); // Destrói a sessão
  res.json({ isLoggedIn: false, id: '', name: '', email: '' });
}

export default withIronSessionApiRoute(logoutRoute, sessionOptions);

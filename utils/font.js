import { Roboto, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto'
});

export const robotoVar = roboto.variable;
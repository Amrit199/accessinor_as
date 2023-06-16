import '../globals.css'

export const metadata = {
    title: 'Miljø Renhold',
    description: 'Generated by Renhold AS',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body>
                {children}
            </body>
        </html>
    )
}
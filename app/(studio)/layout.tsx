import '../globals.css'

export const metadata = {
    title: 'AccessiNor AS',
    description: 'Generated by AccessiNor AS',
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
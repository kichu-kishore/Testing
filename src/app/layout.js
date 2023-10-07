// import './globals.css'

// This is Home page that Contains all the Product Details
//For the Home page only add the Meta tag Here Other wise everywhere add it on the page wise
export const metadata = {
  title: 'Online Text Tools',
  description: 'Online Text Tools provides various of Text replated tools such as Text Editor,Formatting, Notepad(note), JSON beatifier and So on...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Headers Part */}
        <main>{children}</main>
        {/* Footers Part */}
        </body>
    </html>
  )
}

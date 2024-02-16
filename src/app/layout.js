import './globals.css'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Superlinear',
  description: 'Superlinear',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}

        <footer className="text-sm p-8 m-8 text-gray-700 max-w-4xl mx-auto">
          <p className="p-2">© 2022 Superlinear, All rights reserved.</p>
          <p className="p-2">Superlinear® and the Superlinear device are registered trademarks of Superlinear, a business registered in New Zealand, NZBN 9429050558483.</p>
          <p className="p-2">To pronounce &quotsuperlinear&quot;, (suh-per-lin-ee-er - begin by saying the first syllable, &quot;suh&quot;, with a short, sharp sound. Next, say the second syllable, &quot;per&quot;, with a slightly longer and more emphasized sound. Then, say the third syllable, &quot;lin&quot;, with a short, sharp sound again. Finally, say the last two syllables, &quot;ee&quot; and &quot;er&quot;, together with a slightly longer and more emphasized sound.
            Overall, the word &quotsuperlinear&quot should be pronounced with a slightly emphasized and drawn out rhythm, with the emphasis placed on the middle syllables.</p>
        </footer>
        <GoogleAnalytics gaId="G-CBSKBGPXHT" />
      </body>
    </html>
  )
}

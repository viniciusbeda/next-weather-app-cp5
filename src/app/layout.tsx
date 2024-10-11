//import { Menu } from '@/components/Menu/Menu'
import styles from './page.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
      <main>{children}</main>
      
      </body>
    </html>
  )
}

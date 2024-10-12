import { Menu } from '@/components/Menu/Menu'
import styles from './page.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <div className={styles.div}>
          <main >{children}</main>
          <Menu />
        </div>
      </body>
    </html>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="footer">
      Copyright © {year} Teodora Dimitrova. All rights reserved.
    </footer>
  )
}

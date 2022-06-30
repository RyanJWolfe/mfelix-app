import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  toggleTheme() {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.remove('theme-dark')
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('theme-dark')
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
  }
}

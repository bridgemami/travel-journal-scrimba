import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";
import s from './header.module.css'

export default function Header() {
  return (
  <header className={s.header}>
    <FontAwesomeIcon icon={faEarthAfrica} className={s.icon} />
    <h1 className={s.title}>my travel journal</h1>
  </header>
  )
}

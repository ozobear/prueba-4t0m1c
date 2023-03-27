import styles from '../styles/Table.module.css'
import check from '../assets/checkmark.png'
import TABLE_DATA from '../static/table_perks.json'

export function Icon () {
  return (
    <div className={styles.icon}>
      <img src={check} alt='check icon' />
    </div>
  )
}

export default function Table () {
  return (
    <section className="bg-[#00609c] pt-24 px-6 -mt-40 lg:-mt-10">
      <section className={styles.table}>
      <table>
          <thead>
          <tr>
            <th />
            <th colSpan={2}>CARACTERÍSTICAS</th>
            <th>OTROS</th>
            <th>ATOMIC</th>
            <th />
          </tr>
          </thead>
          <tbody>
          {TABLE_DATA.map((row, index) => (
            <tr key={index}>
            <td />
            <td colSpan={2}>{row.perk}</td>
            <td>{row.others ? <Icon /> : null}</td>
            <td>{row.atomic ? <Icon /> : null}</td>
            <td />
            </tr>
          ))}
          <tr>
            <td colSpan={2} />
            <td />
            <td />
            <td />
            <td />
          </tr>
          </tbody>
      </table>
      </section>
    </section>
  )
}

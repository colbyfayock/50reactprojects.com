import styles from './Checklist.module.scss';

const Checklist = ({ items = [] }) => {
  if ( !Array.isArray(items) ) {
    throw new Error(`Failed to render Checklist: Invalid items type ${typeof items}`)
  }

  return (
    <ul className={styles.checklist}>
      {items.map((item, i) => {
        return (
          <li key={i}>
            <label className={styles.checklistItemLabel}>
              <input className="sronly" type="checkbox" defaultChecked={item?.checked} />
              <span>{ item?.label }</span>
            </label>
          </li>
        );
      })}
    </ul>
  )
}

export default Checklist;
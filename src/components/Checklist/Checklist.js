import styles from './Checklist.module.scss';

const Checklist = ({ items = [], checkable = true, onChange }) => {
  if ( !Array.isArray(items) ) {
    throw new Error(`Failed to render Checklist: Invalid items type ${typeof items}`)
  }

  return (
    <ul className={styles.checklist} data-is-checkable={checkable}>
      {items.map((item = {}, i) => {
        const { label, checked = false } = item;
        const value = item?.value || label;
        return (
          <li key={i}>
            <label className={styles.checklistItemLabel}>
              {checkable && (
                <input className="sronly" type="checkbox" defaultChecked={checked} value={value} onChange={onChange} />
              )}
              <span>{ label }</span>
            </label>
          </li>
        );
      })}
    </ul>
  )
}

export default Checklist;
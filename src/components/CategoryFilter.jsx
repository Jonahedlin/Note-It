/**
@FileName CategoryFilter.jsx
@Description This file contains the CategoryFilter component for the Note-It extension.
@Author Jonah Ssembatya
@CreationDate 02-15-2026 (MM-DD-YYYY)
@LastModified 05-08-2026 (MM-DD-YYYY)
@Version 1.0.2
@ProjectName Note-It-Down!! (Note-It)
 */

/**
 * Maps each category name to its active-state inline style (background, text, and border color).
 * ALL uses the note surface color (#94ddbc). None is not a filter tab and is excluded here.
 */
const CATEGORY_ACTIVE_STYLES = {
  ALL:      { backgroundColor: '#94ddbc', color: '#000', borderColor: '#94ddbc' },
  Work:     { backgroundColor: '#0d6efd', color: '#fff', borderColor: '#0d6efd' },
  Personal: { backgroundColor: '#198754', color: '#fff', borderColor: '#198754' },
  School:   { backgroundColor: '#ffc107', color: '#000', borderColor: '#ffc107' },
}

/**
@Name CategoryFilter
@Description Renders the horizontal tab bar used to filter the visible notes list.
             Receives the full categories array, the currently active category, and a
             change handler from App. For each category it computes whether it is active
             and, if so, applies the corresponding color style from CATEGORY_ACTIVE_STYLES.
             The ALL tab uses the note surface color; Work, Personal, and School use their
             respective accent colors. Inactive tabs retain the default Bootstrap nav styling.
@Param categories       — Array of category label strings to render as tabs (e.g. ['ALL', 'Work', ...])
@Param activeCategory   — String indicating the currently selected category
@Param onCategoryChange — Callback invoked with the new category string when a tab is clicked
@Return JSX — a Bootstrap nav-tabs <ul> with one <li><button> per category
@Notes The "None" category is intentionally excluded from this tab bar; notes assigned
       "None" are only surfaced when ALL is selected.
 */
function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <ul className="nav nav-tabs mb-3">
      {categories.map(category => {
        const isActive = activeCategory === category
        const activeStyle = isActive && CATEGORY_ACTIVE_STYLES[category]
          ? CATEGORY_ACTIVE_STYLES[category]
          : {}

        return (
          <li className="nav-item" key={category}>
            <button
              className={`nav-link ${isActive ? 'active fw-semibold' : ''}`}
              style={activeStyle}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default CategoryFilter

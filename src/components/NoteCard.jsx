/**
@FileName NoteCard.jsx
@Description This file contains the NoteCard component for the Note-It extension.
@Author Jonah Ssembatya
@CreationDate 02-15-2026 (MM-DD-YYYY)
@LastModified 05-08-2026 (MM-DD-YYYY)
@Version 1.0.2
@ProjectName Note-It-Down!! (Note-It)
 */

/**
 * Maps each category name to its corresponding color used for the indicator dot.
 * None uses a neutral gray. Falls back to #6c757d for any unrecognized category.
 */
const CATEGORY_COLORS = {
  None:     '#adb5bd',
  Work:     '#0d6efd',
  Personal: '#198754',
  School:   '#ffc107'
}

/**
@Name NoteCard
@Description Stateless display component that renders a single note as a styled card.
             Shows the note's text content on the left and, on the right, a small filled
             circle whose color corresponds to the note's category (via CATEGORY_COLORS)
             alongside a circular delete button. The card carries no internal state;
             all data and behavior flow in through props.
@Param note     — Note object with shape { id, content, category, createdAt }
@Param onDelete — Callback invoked with note.id when the delete button is clicked
@Return JSX — a Bootstrap card element containing note content, a category dot, and a delete button
@Notes The category label is intentionally omitted from the card UI; color alone indicates category.
       The delete action is irreversible — no confirmation dialog is shown.
 */
function NoteCard({ note, onDelete }) {
  const dotColor = CATEGORY_COLORS[note.category] || '#6c757d'

  return (
    <div className="note-card card mb-2">
      <div className="card-body p-2 d-flex align-items-center gap-2">
        <p className="card-text small note-card-text mb-0 flex-grow-1">{note.content}</p>
        <div className="d-flex align-items-center gap-2 flex-shrink-0">
          <div className="category-dot" style={{ backgroundColor: dotColor }} />
          <button
            className="delete-btn-circle"
            onClick={() => onDelete(note.id)}
            title="Delete note"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteCard

/**
@FileName NoteForm.jsx
@Description This file contains the NoteForm component for the Note-It extension.
@Author Jonah Ssembatya
@CreationDate 02-15-2026 (MM-DD-YYYY)
@LastModified 05-08-2026 (MM-DD-YYYY)
@Version 1.0.2
@ProjectName Note-It-Down!! (Note-It)
 */

import { useState } from 'react'

/**
@Name NoteForm
@Description Controlled form component for composing and submitting new notes.
             Manages its own local state for the note content (textarea) and selected
             category (dropdown). The category dropdown is positioned to the right of
             the textarea with the Add button stacked beneath it. On submission, the
             component validates that content is not blank, calls the onAdd callback
             with the trimmed content and selected category, then resets both fields
             to their defaults. The default category is always the first element of
             the categories prop, which is "None".
@Param categories — Array of assignable category strings (excludes "ALL"); first element is the default
@Param onAdd      — Callback invoked with { content, category } when a valid note is submitted
@Return JSX — a card-styled <form> containing a textarea, category <select>, and submit button
@Notes Submission is blocked silently if the textarea is empty or contains only whitespace.
       Field state resets to defaults immediately after a successful submission.
 */
function NoteForm({ categories, onAdd }) {
  const [content, setContent] = useState('')
  const [category, setCategory] = useState(categories[0])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!content.trim()) return
    onAdd({ content: content.trim(), category })
    setContent('')
    setCategory(categories[0])
  }

  return (
    <form onSubmit={handleSubmit} className="note-form card p-3 mb-2">
      <div className="d-flex gap-2 align-items-stretch">
        <textarea
          className="form-control note-textarea"
          placeholder="Write a note..."
          rows={3}
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <div className="d-flex flex-column gap-2">
          <select
            className="form-select form-select-sm note-select"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button type="submit" className="btn btn-primary btn-sm flex-grow-1">Add</button>
        </div>
      </div>
    </form>
  )
}

export default NoteForm

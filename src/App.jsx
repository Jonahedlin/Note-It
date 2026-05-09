/**
@FileName App.jsx
@Description This file contains the main App function for this program.
@Author Jonah Ssembatya
@CreationDate 02-15-2026 (MM-DD-YYYY)
@LastModified 05-08-2026 (MM-DD-YYYY)
@Version 1.0.2
@ProjectName Note-It-Down!! (Note-It)

 */




import { useState, useEffect } from 'react'
import CategoryFilter from './components/CategoryFilter'
import NoteForm from './components/NoteForm'
import NoteCard from './components/NoteCard'

const CATEGORIES = ['ALL', 'Work', 'Personal', 'School']

/**
@Name App
@Description Root React component for the Note-It extension popup. Initializes and owns
             all application state: the full notes array (fetched from localStorage on mount
             and synced back on every change via useEffect) and the active category filter.
             Exposes addNote and deleteNote handlers to child components via props.
             Derives the visible note list by filtering the notes array against activeCategory;
             notes assigned "None" only appear when activeCategory is "ALL".
             Renders the animated logo, category tab bar (CategoryFilter), note creation
             form (NoteForm), and the filtered stack of note cards (NoteCard).
@Param NA
@Return JSX — the full popup layout tree
@Notes All persistence is handled here via localStorage under the key "note-it-notes".
       No backend or chrome.storage API is used.
 */


function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('note-it-notes')
    return saved ? JSON.parse(saved) : []           //if previous notes are not found or location is changed, program will return an empty notes list
  })
  const [activeCategory, setActiveCategory] = useState('ALL')

  useEffect(() => {
    localStorage.setItem('note-it-notes', JSON.stringify(notes))
  }, [notes])

// All notes have an included date stamp corresponding to the device's timezone and current date (MAY BE REDUNDANT IN LATER VERSIONS)
  const addNote = (note) => {
    setNotes([{ id: Date.now(), ...note, createdAt: new Date().toISOString() }, ...notes])
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const filteredNotes = activeCategory === 'ALL'
    ? notes
    : notes.filter(note => note.category === activeCategory)

  return (
    <div className="app-container p-3">
      <div className="app-logo-wrap">
        <video className="app-logo-video" autoPlay loop muted playsInline>
          <source src="/logo.mp4" type="video/mp4" />
        </video>
      </div>
      <CategoryFilter
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <NoteForm categories={['None', 'Work', 'Personal', 'School']} onAdd={addNote} />
      <div className="notes-list mt-2">
        {filteredNotes.length === 0 ? (
          <p className="text-center text-muted small mt-3">No notes here. Add one above!</p>
        ) : (
          filteredNotes.map(note => (
            <NoteCard key={note.id} note={note} onDelete={deleteNote} />
          ))
        )}
      </div>
    </div>
  )
}

export default App

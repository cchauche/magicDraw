import React from 'react'
import { useStore } from "./helpers/state";

const PropertiesPanel = () => {
  return (
    <aside className="panel">
      <h4>Properties</h4>
      <p>{JSON.stringify(useStore.get())}</p>
    </aside>
  )
}

export default PropertiesPanel

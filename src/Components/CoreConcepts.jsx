import React from 'react'
import { CORE_CONCEPTS } from '../data'
import CoreConcept from './CoreConcept'

function CoreConcepts() {
  return (
    <div id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((element) => (
              <CoreConcept key={element.title} {...element}/>)
            )}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </div>
  )
}

export default CoreConcepts
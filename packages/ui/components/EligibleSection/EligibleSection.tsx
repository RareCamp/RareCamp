import { Button } from 'antd'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'react-dom'
import styles from './eligible.module.css'

function EligibleSection({
  setShowEligibleSection,
  isShowEligibleSection,
}: any) {
  const router = useRouter()
  async function createProgram() {
    const createProgramResponse = await axios.post('/programs', {
      program: {
        name: 'test',
      },
    })
    if (createProgramResponse?.data?.program) {
      router.push(
        `/programs/${createProgramResponse.data.program.id}`,
      )
    }
  }

  return (
    <div className={styles['eligible-section']}>
      <div className={styles['eligible-divOne']}>
        <img
          src="/eligibility_5.png"
          width={300}
          alt="proteinformImage"
        />
        <h1>SSMD may be eligible for a AAV based Gene Therapy</h1>
        <p>
          The results are forwarded to our science team for further
          validation. They will reach out to you to collect more gene
          and patient information to confirm Gene therapy feasibility.
          Beyond that it is critical that the you partner with a
          qualified investigator and institution to develop a roadmap
          for your Gene therapy treatment.
        </p>
        <Button
          type="primary"
          size="middle"
          style={{ marginTop: '1.5rem' }}
          onClick={() => {
            setShowEligibleSection(false)
          }}
        >
          Create a new Program +
        </Button>
      </div>
      <div className={styles['eligible-divTwo']}>
        <div>
          {isShowEligibleSection ? (
            <h1>How was this determined?</h1>
          ) : (
            <h1>How was this determined?</h1>
          )}
        </div>
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy
          text used in laying out print, graphic or web designs.
        </p>
        <p>
          The passage is attributed to an unknown typesetter in the
          15th century who is thought to have scrambled parts of
          Ciceros De.
        </p>
      </div>
    </div>
  )
}

export default EligibleSection

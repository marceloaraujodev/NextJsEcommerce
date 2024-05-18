import ButtonLink from '@/components/ButtonLink'
import CenterVertically from '@/components/CenterVertically'
import Layout from '@/components/Layout'
import React from 'react'

export default function admin() {
  return (
    <Layout>
      <CenterVertically>
        <ButtonLink $black href='http://localhost:3000'>Login to Admin</ButtonLink>
      </CenterVertically>
    </Layout>
  )
}

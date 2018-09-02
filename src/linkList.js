import React from 'react'
import { List } from 'semantic-ui-react'

const ListLink = () => (
  <List>
    <List.Item as='a' href="https://jupyterhub.readthedocs.io" >JupyterHub Docs</List.Item>
    <List.Item as='a' href="https://mybinder.org">mybinder.org</List.Item>
    <List.Item as='a'>Where is our office located?</List.Item>
  </List>
)

export default ListLink
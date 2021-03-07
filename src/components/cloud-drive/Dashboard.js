import React from 'react'
import { Container } from 'react-bootstrap'
import { useFolder } from '../../hooks/useFolder'
import AddFolderBtn from './AddFolderBtn'
import NavbarComponent from "./Navbar"

export default function Dashboard() {
    const { folder } = useFolder()

    return (
        <>
            <NavbarComponent />
            <Container fluid>
            <AddFolderBtn currentFolder={folder} />
            </Container>
        </>
    )
}

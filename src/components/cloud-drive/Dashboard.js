import React from 'react'
import { Container } from 'react-bootstrap'
import { useFolder } from '../../hooks/useFolder'
import AddFolderBtn from './AddFolderBtn'
import NavbarComponent from "./Navbar"

export default function Dashboard() {
    const { folder } = useFolder("D9XF6ZylXRbLgxaP9XaX")

    return (
        <>
            <NavbarComponent />
            <Container fluid>
            <AddFolderBtn currentFolder={folder} />
            </Container>
        </>
    )
}

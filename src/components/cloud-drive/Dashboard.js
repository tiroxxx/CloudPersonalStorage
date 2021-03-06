import React from 'react'
import { Container } from 'react-bootstrap'
import AddFolderBtn from './AddFolderBtn'
import NavbarComponent from "./Navbar"

export default function Dashboard() {
    return (
        <>
            <NavbarComponent />
            <Container fluid>
            <AddFolderBtn />
            </Container>
        </>
    )
}

import React from 'react'
import { Container } from 'react-bootstrap'
import { useFolder } from '../../hooks/useFolder'
import AddFolderBtn from './AddFolderBtn'
import NavbarComponent from "./Navbar"
import Folder from "./Folder"

export default function Dashboard() {
    const { folder, childFolders } = useFolder("D9XF6ZylXRbLgxaP9XaX")
    console.log(childFolders);
    return (
        <>
            <NavbarComponent />
            <Container fluid>
                <AddFolderBtn currentFolder={folder} />
                {childFolders.length > 0 && (
                    <div className="d-flex flex-wrap">
                        {childFolders.map(childFolder => (
                            <div key={childFolder.id} style={{ maxWidth: "250px" }} className="p-2">
                                <Folder folder={childFolder} />
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </>
    )
}

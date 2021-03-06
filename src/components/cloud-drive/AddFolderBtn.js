import { Button } from 'react-bootstrap'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"

export default function AddFolderBtn() {

    function openModal() {

    }

    return (
        <Button onClick={openModal} variant="outline-success" size="sm">
            <FontAwesomeIcon icon={faFolderPlus} />
        </Button>
    )
}


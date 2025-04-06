'use client';

import { Card, ListGroup } from 'react-bootstrap';
import Image from 'next/image';
import { Contact } from '@/lib/validationSchemas';
import Link from 'next/link';
import { Note } from '@prisma/client';
import NoteItem from './NoteItem';
import AddNoteForm from './AddNoteForm';

interface Props {
  contact: Contact;
  notes: Note[];
}

const ContactCard = ({ contact, notes = [] }: Props) => (
  <Card className="h-100">
    <Card.Body>
      <div className="d-flex align-items-center mb-3">
        <Image
          src={contact.image}
          alt={`${contact.firstName} 
                ${contact.lastName}`}
          width={75}
          height={75}
          className="me-3 rounded-circle"
        />
        <div>
          <Card.Title className="mb-0">
            {contact.firstName}
            {' '}
            {contact.lastName}
          </Card.Title>
          <Card.Subtitle className="text-muted">{contact.address}</Card.Subtitle>
        </div>
      </div>
      <Card.Text>{contact.description}</Card.Text>
    </Card.Body>
    <ListGroup variant="flush">
      {notes.map((note) => (
        <NoteItem note={note} />
      ))}
    </ListGroup>
    <AddNoteForm contactId={contact.id} />
    <Card.Footer>
      <Link href={`/edit/${contact.id}`}>Edit</Link>
    </Card.Footer>
  </Card>
);

export default ContactCard;

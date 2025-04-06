'use client';

import { Card, ListGroup } from 'react-bootstrap';
import { Note } from '@prisma/client';

interface Props {
  note: Note;
}

const NoteItem = ({ note }: Props) => (
  <Card className="h-100">
    <ListGroup.Item>
      <p className="fw-lighter">{new Date(note.createdAt).toLocaleDateString('en-US')}</p>
      <p>{note.note}</p>
    </ListGroup.Item>
  </Card>
);

export default NoteItem;

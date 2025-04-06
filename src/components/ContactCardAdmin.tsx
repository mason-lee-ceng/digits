'use client';

import { Card } from 'react-bootstrap';
import Image from 'next/image';
import { Contact } from '@/lib/validationSchemas';

interface Props {
  contact: Contact;
}

const ContactCardAdmin = ({ contact }: Props) => (
  <Card className="h-100">
    <Card.Body>
      <div className="d-flex align-items-center mb-3">
        <Image
          src={contact.image}
          alt={`${contact.firstName} ${contact.lastName}`}
          width={75}
          height={75}
          className="me-3 rounded-circle"
        />
        <div>
          <Card.Title className="mb-0">
            {contact.firstName}
            {contact.lastName}
          </Card.Title>
          <Card.Subtitle className="text-muted">{contact.address}</Card.Subtitle>
        </div>
      </div>
      <Card.Text>{contact.description}</Card.Text>
      <p className="blockquote-footer">{contact.owner}</p>
    </Card.Body>
  </Card>
);

export default ContactCardAdmin;

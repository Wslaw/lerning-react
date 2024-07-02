// import React from 'react';

const PhoneList = ({title, contacts}) => {

    const elements = contacts.map((contact) => (
      <li key={contact.id}>
        {contact.name},{contact.phone}
      </li>
    ));

  return (
      <>
          <h3>{title }</h3>
      <ul>{elements}</ul>
    </>
  );
}

export default PhoneList

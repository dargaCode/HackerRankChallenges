
// https://www.hackerrank.com/challenges/30-regex-patterns

// Given an array of names and email addresses, print an alphabetically-ordered list of first names for every user with a gmail account. Each name must be printed on a new line.

// CONSTANTS

const GMAIL_REGEXP = /@gmail.com/;

// FUNCTIONS

function getGmailUsers(users) {
  const gmailUsers = [];

  for (const user of users) {
    const [name, email] = user.split(' ');
    const gmailUser = GMAIL_REGEXP.test(email);

    if (gmailUser) {
      gmailUsers.push(name);
    }
  }
  return gmailUsers;
}

function displayArray(arr) {
  for (const element of arr) {
    console.log(element);
  }
}

// MAIN

(function main() {
  const users = [
    'riya riya@gmail.com',
    'julia julia@julia.me',
    'julia sjulia@gmail.com',
    'julia julia@gmail.com',
    'samantha samantha@gmail.com',
    'tanya tanya@gmail.com',
  ];

  const gmailUserNames = getGmailUsers(users);
  const sortedNames = gmailUserNames.sort();

  displayArray(sortedNames);
}());

function Member(name, birth, nationality) {
  this.name = name;
  this.birth = birth;
  this.nationality = nationality
}

export const members = [
  new Member('nayeon', '9.22.1995', 'South Korea'),
  new Member('jeongyeon', '11.1.1996', 'South Korea'),
  new Member('momo', '11.9.1996', 'Japan'),
  new Member('sana', '12.29.1996', 'Japan'),
  new Member('jihyo', '2.1.1997', 'South Korea'),
  new Member('mina', '3.24.1997', 'Japan'),
  new Member('dahyun', '5.28.1998', 'South Korea'),
  new Member('chaeyoung', '4.23.1999', 'South Korea'),
  new Member('tzuyu', '6.14.1999', 'Taiwan')
]
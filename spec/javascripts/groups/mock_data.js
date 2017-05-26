const group1 = {
  id: '12',
  name: 'level1',
  path: 'level1',
  description: '',
  visibility: 'public',
  avatar_url: null,
  web_url: 'http://localhost:3000/groups/level1',
  full_name: 'level1',
  full_path: 'level1',
  parent_id: null,
  created_at: '2017-05-15T19:01:23.670Z',
  updated_at: '2017-05-15T19:01:23.670Z',
  permissions: {
    group_access: 50,
  },
};

// This group has no direct parent, should be placed as subgroup of group1
const group14 = {
  id: 1128,
  name: 'level4',
  path: 'level4',
  description: '',
  visibility: 'public',
  avatar_url: null,
  web_url: 'http://localhost:3000/groups/level1/level2/level3/level4',
  full_name: 'level1 / level2 / level3 / level4',
  full_path: 'level1/level2/level3/level4',
  parent_id: 1127,
  created_at: '2017-05-15T19:02:01.645Z',
  updated_at: '2017-05-15T19:02:01.645Z',
  permissions: {
    group_access: 30,
  },
};

const group2 = {
  id: 1119,
  name: 'devops',
  path: 'devops',
  description: '',
  visibility: 'public',
  avatar_url: null,
  web_url: 'http://localhost:3000/groups/devops',
  full_name: 'devops',
  full_path: 'devops',
  parent_id: null,
  created_at: '2017-05-11T19:35:09.635Z',
  updated_at: '2017-05-11T19:35:09.635Z',
  permissions: {
    group_access: 50,
  },
};

const group21 = {
  id: 1120,
  name: 'chef',
  path: 'chef',
  description: '',
  visibility: 'public',
  avatar_url: null,
  web_url: 'http://localhost:3000/groups/devops/chef',
  full_name: 'devops / chef',
  full_path: 'devops/chef',
  parent_id: 1119,
  created_at: '2017-05-11T19:51:04.060Z',
  updated_at: '2017-05-11T19:51:04.060Z',
  permissions: {
    group_access: 50,
  },
};

const groupsData = {
  groups: [group1, group14, group2, group21],
  pagination: {
    Date: 'Mon, 22 May 2017 22:31:52 GMT',
    'X-Prev-Page': '1',
    'X-Content-Type-Options': 'nosniff',
    'X-Total': '31',
    'Transfer-Encoding': 'chunked',
    'X-Runtime': '0.611144',
    'X-Xss-Protection': '1; mode=block',
    'X-Request-Id': 'f5db8368-3ce5-4aa4-89d2-a125d9dead09',
    'X-Ua-Compatible': 'IE=edge',
    'X-Per-Page': '20',
    Link: '<http://localhost:3000/dashboard/groups.json?page=1&per_page=20>; rel="prev", <http://localhost:3000/dashboard/groups.json?page=1&per_page=20>; rel="first", <http://localhost:3000/dashboard/groups.json?page=2&per_page=20>; rel="last"',
    'X-Next-Page': '',
    Etag: 'W/"a82f846947136271cdb7d55d19ef33d2"',
    'X-Frame-Options': 'DENY',
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'max-age=0, private, must-revalidate',
    'X-Total-Pages': '2',
    'X-Page': '2',
  },
};

export { groupsData, group1 };

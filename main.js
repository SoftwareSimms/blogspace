// Fetch the JSON data and populate the sections with it
async function populateSections() {
    const response = await fetch('database.json');
    const data = await response.json();
  
    populateCVSection(data.cv);
    populateProjectsSection(data.projects);
    populateContactsSection(data.contacts);
    populateBlogSection(data.blog);
  }
  
  // Populate the CV section with the data
  function populateCVSection(cv) {
    const cvSection = document.querySelector('#cv');
    cvSection.querySelector('h2').textContent = cv.heading;
    cvSection.querySelector('a').href = cv.link;
  }
  
  // Populate the Projects section with the data
  function populateProjectsSection(projects) {
    const projectsSection = document.querySelector('#projects');
    const contentList = projectsSection.querySelector('ul');
  
    projectsSection.querySelector('h2').textContent = projects.heading;
    projects.content.forEach(project => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.textContent = project.heading;
      link.href = project.link;
      link.target = '_blank';
      listItem.appendChild(link);
      contentList.appendChild(listItem);
    });
  }
  
  // Populate the Contacts section with the data
  function populateContactsSection(contacts) {
    const contactsSection = document.querySelector('#contacts');
    const contentList = contactsSection.querySelector('ul');
  
    contactsSection.querySelector('h2').textContent = contacts.heading;
    contacts.content.forEach(contact => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.textContent = contact.heading;
      link.href = contact.link;
      link.target = '_blank';
      listItem.appendChild(link);
      contentList.appendChild(listItem);
    });
  }
  
  // Populate the Blog section with the data
  function populateBlogSection(blog) {
    const blogSection = document.querySelector('#blog');
    const blogPosts = blogSection.querySelector('#blogPosts');
  
    blogSection.querySelector('h2').textContent = 'Blog';
    blog.forEach(post => {
      const postElement = document.createElement('div');
      const headingElement = document.createElement('h3');
      const contentElement = document.createElement('p');
  
      headingElement.textContent = post.heading;
      contentElement.textContent = post.content;
      postElement.appendChild(headingElement);
      postElement.appendChild(contentElement);
      blogPosts.appendChild(postElement);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    populateSections();
  });
  
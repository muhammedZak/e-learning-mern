const courses = [
  {
    title: 'Python Mastery: From Fundamentals to Advanced Applications',
    topic: 'Python',
    instructor: '65e57373124a9985e01b1f70',
    category: '65ef1d01dfe1980def4d0c79',
    subcategory: '65ef5be2be2ea893e675c9d9',
    description:
      'Unlock the power of Python with our comprehensive course covering everything from basics to advanced applications. Master Python programming and unleash your potential',
    summary:
      "Embark on a transformative journey into the world of Python with our comprehensive course, 'Python Mastery: From Fundamentals to Advanced Applications.' Designed for beginners and seasoned programmers alike, this course offers a structured approach to mastering Python programming language. Dive into the fundamentals of Python syntax, data structures, and control flow, gradually advancing to more complex topics such as object-oriented programming, file handling, and web development with Django. Through hands-on projects and real-world examples, you'll gain practical experience and confidence in your Python skills. Whether you're aiming to kickstart your programming career or enhance your existing expertise, this course equips you with the knowledge and tools to succeed in the dynamic realm of Python development.",
    duration: 17,
    difficulty: 'beginner',
    ratingsAverage: 4.2,
    ratingsQuantity: 256,
    price: 650,
    images: 'images/python_mastery.jpeg',
  },
  {
    title: 'Python for Data Science: Analyze, Visualize, and Predict',
    topic: 'Python',
    instructor: '65ec3ff7d586e0113aa177b6',
    category: '65ef1d01dfe1980def4d0c79',
    subcategory: '65ef5be2be2ea893e675c9d9',
    description:
      'Discover the power of Python for data analysis, visualization, and predictive modeling. Learn essential libraries like Pandas, Matplotlib, and Scikit-learn to manipulate data, create insightful visualizations, and build machine learning models.',
    summary:
      "Dive deep into the world of data science with our specialized course, 'Python for Data Science: Analyze, Visualize, and Predict.' This course is tailored for individuals looking to harness the capabilities of Python for data analysis, visualization, and predictive modeling. Gain expertise in essential libraries such as Pandas for data manipulation, Matplotlib for visualization, and Scikit-learn for machine learning. Through hands-on projects and practical exercises, you'll learn how to clean and preprocess data, create informative visualizations, and develop predictive models to extract actionable insights. Whether you're a beginner or seasoned professional, this course empowers you to leverage Python's versatility for solving real-world data challenges.",
    duration: 21,
    difficulty: 'intermediate',
    ratingsAverage: 4.5,
    ratingsQuantity: 382,
    price: 799,
    images: 'images/python_data_science.jpeg',
  },
  {
    title: 'Python Web Development: Building Dynamic Websites with Flask',
    topic: 'Python',
    instructor: '65f1e511fdb59747b6ab6aba',
    category: '65ef1d01dfe1980def4d0c79',
    subcategory: '65ef5be2be2ea893e675c9d9',
    description:
      'Take your web development skills to the next level with Python and Flask. Learn how to build dynamic and interactive web applications, from basic CRUD operations to implementing user authentication and deploying your projects.',
    summary:
      "Elevate your web development prowess with our specialized course, 'Python Web Development: Building Dynamic Websites with Flask.' This course is tailored for aspiring developers keen on leveraging Python and Flask to create dynamic and interactive web applications. Delve into the fundamentals of web development, including routing, templates, and forms, while mastering Flask's powerful features for building robust web applications. From basic CRUD operations to implementing user authentication and deploying your projects to the web, this course guides you through every step of the development process. With practical projects and expert guidance, you'll gain the skills and confidence to embark on your journey as a proficient Python web developer.",
    duration: 25,
    difficulty: 'intermediate',
    ratingsAverage: 4.3,
    ratingsQuantity: 312,
    price: 899,
    images: 'images/python_web_dev.jpeg',
  },
  {
    title: 'React Fundamentals: Building Interactive User Interfaces',
    topic: 'React',
    instructor: '65f1e52dfdb59747b6ab6abd',
    category: '65ef1d01dfe1980def4d0c79',
    subcategory: '65ef5bbebe2ea893e675c9c7',
    description:
      'Master the fundamentals of React.js and learn how to build interactive user interfaces for web applications. Explore components, state management, routing, and more in this hands-on course.',
    summary:
      "Kickstart your journey into the world of React.js with our foundational course, 'React Fundamentals: Building Interactive User Interfaces.' Designed for beginners, this course equips you with the essential skills to create dynamic and responsive user interfaces for web applications. Learn the core concepts of React, including components, props, state management, and lifecycle methods, through hands-on projects and practical examples. Dive into advanced topics such as routing, form handling, and integrating with external APIs to build fully functional React applications. With expert guidance and real-world projects, you'll gain the confidence to tackle any React development challenge.",
    duration: 18,
    difficulty: 'beginner',
    ratingsAverage: 4.4,
    ratingsQuantity: 298,
    price: 699,
    images: 'images/react_fundamentals.jpeg',
  },
  {
    title: 'React Hooks: Simplifying State and Side Effects',
    topic: 'React',
    instructor: '65f1e544fdb59747b6ab6ac0',
    category: '65ef1d01dfe1980def4d0c79',
    subcategory: '65ef5bbebe2ea893e675c9c7',
    description:
      'Explore the power of React Hooks to simplify state management and handle side effects in your applications. Learn how to use useState, useEffect, useContext, and custom hooks effectively.',
    summary:
      "Unlock the full potential of React development with our specialized course, 'React Hooks: Simplifying State and Side Effects.' Dive deep into the world of React Hooks, the revolutionary feature introduced in React 16.8, to simplify state management and handle side effects in your applications. Discover how to leverage useState for managing component state, useEffect for handling side effects, useContext for sharing state between components, and create custom hooks for reusable logic. Through practical examples and hands-on exercises, you'll learn how to refactor class-based components to functional components and harness the power of React Hooks to build cleaner, more maintainable code. Whether you're a seasoned React developer or new to React development, this course empowers you to elevate your skills and productivity.",
    duration: 20,
    difficulty: 'intermediate',
    ratingsAverage: 4.6,
    ratingsQuantity: 354,
    price: 749,
    images: 'images/react_hooks.jpeg',
  },
  {
    title: 'React Native: Building Cross-Platform Mobile Apps',
    topic: 'React',
    instructor: '65f1e544fdb59747b6ab6ac0',
    category: '65ef1d01dfe1980def4d0c79',
    subcategory: '65ef5bbebe2ea893e675c9c7',
    description:
      'Learn how to build native mobile applications for iOS and Android using React Native. Explore components, navigation, state management, and device APIs in this comprehensive course.',
    summary:
      "Venture into the realm of mobile app development with our specialized course, 'React Native: Building Cross-Platform Mobile Apps.' Discover the power of React Native, a framework for building native mobile applications using React and JavaScript. Dive into the fundamentals of React Native development, including components, navigation, state management, and accessing device APIs. Learn how to build cross-platform mobile apps that run seamlessly on both iOS and Android devices, leveraging the flexibility and efficiency of React Native. With hands-on projects and expert guidance, you'll gain the skills and confidence to develop high-quality mobile apps for a global audience. Whether you're a web developer looking to expand into mobile development or an experienced mobile developer seeking a modern framework, this course equips you with the knowledge and tools to succeed.",
    duration: 24,
    difficulty: 'intermediate',
    ratingsAverage: 4.5,
    ratingsQuantity: 328,
    price: 849,
    images: 'images/react_native.jpeg',
  },
  {
    title: 'React Advanced: State Management with Redux',
    topic: 'React',
    instructor: '65e57373124a9985e01b1f70',
    category: '65ef1d01dfe1980def4d0c79',
    subcategory: '65ef5bbebe2ea893e675c9c7',
    description:
      'Deepen your understanding of state management in React with Redux. Learn how to integrate Redux into your applications, manage complex state effectively, and streamline data flow.',
    summary:
      "Take your React skills to the next level with our advanced course, 'React Advanced: State Management with Redux.' Explore the powerful Redux library and learn how to effectively manage state in large-scale React applications. Dive deep into Redux concepts such as actions, reducers, and the store, and discover how to integrate Redux into your projects to streamline data flow and simplify state management. Gain hands-on experience building Redux-powered applications, implementing features like asynchronous actions, middleware, and selector functions. Whether you're grappling with complex state requirements or aiming to optimize data flow in your React applications, this course equips you with the expertise to architect robust and maintainable React Redux applications.",
    duration: 22,
    difficulty: 'advanced',
    ratingsAverage: 4.7,
    ratingsQuantity: 412,
    price: 899,
    images: 'images/react_redux.jpeg',
  },
  {
    title: 'Full-Stack Web Development: From Frontend to Backend Mastery',
    topic: 'Javascript',
    instructor: '65e57373124a9985e01b1f70',
    category: '65ef1d01dfe1980def4d0c79',
    subcategory: '65ef5bbebe2ea893e675c9c7',
    description:
      'Master the art of full-stack web development with our comprehensive course. Learn frontend technologies like HTML, CSS, JavaScript, React, and backend technologies like Node.js, Express, and MongoDB.',
    summary:
      "Embark on a transformative journey into the world of full-stack web development with our comprehensive course, 'Full-Stack Web Development: From Frontend to Backend Mastery.' Designed for aspiring developers, this course covers everything you need to know to become proficient in both frontend and backend technologies. Start by mastering the fundamentals of web development, including HTML, CSS, and JavaScript, before delving into advanced frontend frameworks like React. On the backend, explore the power of Node.js and Express for building robust server-side applications, and MongoDB for database management. Through hands-on projects and real-world examples, you'll gain practical experience and confidence in building full-stack web applications from scratch. Whether you're aiming to launch a career as a full-stack developer or enhance your existing skill set, this course equips you with the knowledge and tools to succeed in the dynamic field of web development.",
    duration: 30,
    difficulty: 'intermediate',
    ratingsAverage: 4.6,
    ratingsQuantity: 536,
    price: 999,
    images: 'images/full_stack_web_dev.jpeg',
  },
  {
    title: 'Data Science Fundamentals: Exploring Insights from Data',
    topic: 'Python',
    instructor: '65e57373124a9985e01b1f70',
    category: '65ef1d01dfe1980def4d0c79',
    subcategory: '65ef5be2be2ea893e675c9d9',
    description:
      'Discover the fundamentals of data science with our comprehensive course. Learn data manipulation, visualization, statistical analysis, and machine learning techniques using Python and popular libraries like Pandas, Matplotlib, and Scikit-learn.',
    summary:
      "Embark on an enlightening journey into the realm of data science with our foundational course, 'Data Science Fundamentals: Exploring Insights from Data.' Tailored for beginners, this course introduces you to the core concepts and techniques of data science, empowering you to extract valuable insights from data. Dive into data manipulation, visualization, and statistical analysis using Python and essential libraries like Pandas, Matplotlib, and NumPy. Explore machine learning techniques for predictive modeling and unsupervised learning with Scikit-learn. Through hands-on projects and real-world examples, you'll gain practical experience and confidence in analyzing and interpreting data. Whether you're a newcomer to data science or looking to expand your skill set, this course equips you with the knowledge and tools to thrive in the data-driven world.",
    duration: 25,
    difficulty: 'beginner',
    ratingsAverage: 4.5,
    ratingsQuantity: 412,
    price: 899,
    images: 'images/data_science_fundamentals.jpeg',
  },
  {
    title: 'Flutter App Development: Build Beautiful Cross-Platform Apps',
    topic: 'Flutter',
    instructor: '65e57373124a9985e01b1f70',
    instructor: '65f1e511fdb59747b6ab6aba',
    category: '65ef1d01dfe1980def4d0c79',
    subcategory: '65ef5bc6be2ea893e675c9cc',
    description:
      'Learn how to build stunning cross-platform mobile applications with Flutter. Explore Flutter widgets, state management, navigation, and integration with backend services in this comprehensive course.',
    summary:
      "Unlock the potential of Flutter and embark on a journey to build beautiful cross-platform mobile applications with our specialized course, 'Flutter App Development: Build Beautiful Cross-Platform Apps.' Dive into the Flutter framework and discover how to create stunning user interfaces using Flutter widgets. Explore various state management techniques to keep your app responsive and efficient. Master navigation patterns to create seamless user experiences, and learn how to integrate your Flutter apps with backend services using APIs. With hands-on projects and expert guidance, you'll gain the skills and confidence to develop high-quality mobile apps for both iOS and Android platforms. Whether you're a beginner or an experienced developer, this course equips you with the knowledge and tools to succeed in the dynamic field of Flutter app development.",
    duration: 20,
    difficulty: 'intermediate',
    ratingsAverage: 4.7,
    ratingsQuantity: 298,
    price: 799,
    images: 'images/flutter_app_dev.jpeg',
  },
  {
    title: 'Advanced Flutter: State Management and Complex UIs',
    topic: 'Flutter',
    instructor: '65e57373124a9985e01b1f70',
    category: '65ef1d01dfe1980def4d0c79',
    subcategory: '65ef5bc6be2ea893e675c9cc',
    description:
      'Deepen your understanding of Flutter with advanced techniques in state management and complex UI design. Learn how to optimize performance, handle asynchronous operations, and architect scalable Flutter applications.',
    summary:
      "Elevate your Flutter skills to the next level with our advanced course, 'Advanced Flutter: State Management and Complex UIs.' Delve into the intricacies of Flutter development and master advanced techniques for state management and complex UI design. Explore different state management solutions such as Provider, Redux, and Riverpod, and learn how to choose the right architecture for your Flutter app. Dive deep into performance optimization strategies, handle asynchronous operations gracefully, and architect scalable Flutter applications. With practical examples and hands-on exercises, you'll gain the expertise to tackle real-world challenges and build high-quality Flutter apps that delight users. Whether you're a seasoned Flutter developer or aspiring to become one, this course equips you with the skills and knowledge to excel in Flutter development.",
    duration: 24,
    difficulty: 'advanced',
    ratingsAverage: 4.8,
    ratingsQuantity: 412,
    price: 899,
    images: 'images/advanced_flutter.jpeg',
  },
  {
    title: 'Node.js Backend Development: Building Scalable APIs',
    topic: 'Node.js',
    instructor: '65f1e511fdb59747b6ab6aba',
    category: '65ef1d01dfe1980def4d0c79',
    subcategory: '65ef5bbebe2ea893e675c9c7',
    description:
      'Master the art of backend development with Node.js. Learn how to build scalable and efficient APIs using Express.js, interact with databases like MongoDB, and deploy your applications to production environments.',
    summary:
      "Dive into the world of backend development with our specialized course, 'Node.js Backend Development: Building Scalable APIs.' Explore the power of Node.js and Express.js to build robust and efficient APIs that scale with your business needs. Learn how to handle routing, middleware, and error handling in Express.js, and interact with databases like MongoDB to store and retrieve data. Discover best practices for authentication, authorization, and security in Node.js applications, and deploy your APIs to production environments using platforms like Heroku or AWS. With hands-on projects and expert guidance, you'll gain the skills and confidence to develop scalable backend solutions for a wide range of applications.",
    duration: 22,
    difficulty: 'intermediate',
    ratingsAverage: 4.6,
    ratingsQuantity: 312,
    price: 799,
    images: 'images/nodejs_backend.jpeg',
  },
  {
    title: 'Modern JavaScript: Mastering ES6 and Beyond',
    topic: 'JavaScript',
    instructor: '65f1e511fdb59747b6ab6aba',
    category: '65ef1d01dfe1980def4d0c79',
    subcategory: '65ef5be2be2ea893e675c9d9',
    description:
      'Deepen your understanding of JavaScript with modern ES6 features and beyond. Learn advanced concepts like closures, promises, async/await, and functional programming techniques to write clean and maintainable code.',
    summary:
      "Take your JavaScript skills to the next level with our advanced course, 'Modern JavaScript: Mastering ES6 and Beyond.' Explore the latest features introduced in ES6 and beyond, including arrow functions, template literals, destructuring, and classes. Dive deep into advanced concepts like closures, promises, async/await, and functional programming techniques to write clean, efficient, and maintainable JavaScript code. Discover how to leverage modern JavaScript frameworks and libraries like React and Node.js to build powerful web applications and backend services. With hands-on exercises and real-world examples, you'll gain the expertise to tackle complex JavaScript challenges and become a proficient JavaScript developer.",
    duration: 20,
    difficulty: 'advanced',
    ratingsAverage: 4.7,
    ratingsQuantity: 378,
    price: 849,
    images: 'images/modern_javascript.jpeg',
  },
  {
    title: 'Photography Fundamentals: Mastering Your Camera',
    topic: 'Photography',
    instructor: '65ec3ff7d586e0113aa177b6',
    category: '65f1e35f66974013b415af94',
    subcategory: '65f1e3c266974013b415afa0',
    description:
      'Master the fundamentals of photography and learn how to use your camera effectively. Explore exposure, composition, lighting, and camera settings to capture stunning photos in any situation.',
    summary:
      "Embark on a journey into the world of photography with our foundational course, 'Photography Fundamentals: Mastering Your Camera.' Whether you're a beginner or an enthusiast looking to improve your skills, this course covers everything you need to know to capture stunning photos. Learn the basics of exposure, including aperture, shutter speed, and ISO, and how to control them to achieve the desired effects. Explore composition techniques to create compelling images, and discover how to use natural and artificial lighting to enhance your photos. With practical exercises and expert guidance, you'll gain the confidence to unleash your creativity and take your photography to the next level.",
    duration: 15,
    difficulty: 'beginner',
    ratingsAverage: 4.5,
    ratingsQuantity: 256,
    price: 499,
    images: 'images/photography_fundamentals.jpeg',
  },
  {
    title: 'Portrait Photography: Capturing Emotions and Personalities',
    topic: 'Photography',
    instructor: '65ec3ff7d586e0113aa177b6',
    category: '65f1e35f66974013b415af94',
    subcategory: '65f1e41666974013b415afa5',
    description:
      'Learn the art of portrait photography and capture the emotions and personalities of your subjects. Explore posing, lighting, composition, and post-processing techniques to create compelling portraits.',
    summary:
      "Unlock the secrets of portrait photography with our specialized course, 'Portrait Photography: Capturing Emotions and Personalities.' Whether you're photographing friends, family, or clients, this course teaches you how to capture the essence of your subjects. Explore posing techniques to flatter your subjects and evoke natural expressions, and learn how to use lighting to enhance mood and create dramatic effects. Dive into composition principles to frame your subjects effectively, and discover post-processing techniques to polish your portraits to perfection. With practical demonstrations and expert guidance, you'll master the art of portrait photography and create captivating images that resonate with viewers.",
    duration: 18,
    difficulty: 'intermediate',
    ratingsAverage: 4.7,
    ratingsQuantity: 312,
    price: 599,
    images: 'images/portrait_photography.jpeg',
  },
  {
    title: 'Landscape Photography: Capturing the Beauty of Nature',
    topic: 'Photography',
    instructor: '65ec3ff7d586e0113aa177b6',
    category: '65f1e35f66974013b415af94',
    subcategory: '65f1e41666974013b415afa5',
    description:
      'Capture the beauty of nature with landscape photography. Learn how to scout locations, compose compelling shots, and use light and weather conditions to create stunning landscape images.',
    summary:
      "Immerse yourself in the world of landscape photography with our specialized course, 'Landscape Photography: Capturing the Beauty of Nature.' Whether you're exploring majestic mountains, serene seascapes, or expansive vistas, this course teaches you how to capture the breathtaking beauty of the natural world. Learn how to scout locations and plan your shoots to maximize the potential for stunning images. Explore composition techniques to create dynamic and compelling landscape shots, and discover how to use natural light and weather conditions to your advantage. With practical tips and inspirational examples, you'll master the art of landscape photography and create images that transport viewers to awe-inspiring destinations.",
    duration: 20,
    difficulty: 'intermediate',
    ratingsAverage: 4.8,
    ratingsQuantity: 378,
    price: 649,
    images: 'images/landscape_photography.jpeg',
  },
  {
    title: 'Adobe Lightroom Mastery: Editing and Enhancing Your Photos',
    topic: 'Photography',
    instructor: '65ec3ff7d586e0113aa177b6',
    category: '65f1e35f66974013b415af94',
    subcategory: '65f1e3c266974013b415afa0',
    description:
      'Master Adobe Lightroom and learn how to edit and enhance your photos like a pro. Explore editing tools, presets, and advanced techniques to transform your photos into works of art.',
    summary:
      "Unlock the full potential of your photos with our specialized course, 'Adobe Lightroom Mastery: Editing and Enhancing Your Photos.' Whether you're a beginner or an experienced photographer, this course teaches you how to take your editing skills to the next level using Adobe Lightroom. Explore the various editing tools and techniques available in Lightroom, from basic adjustments to advanced retouching and creative effects. Discover how to organize and manage your photo library efficiently, and create custom presets to streamline your workflow. With step-by-step tutorials and practical exercises, you'll gain the confidence to edit and enhance your photos like a pro, transforming them into stunning works of art that stand out from the crowd.",
    duration: 16,
    difficulty: 'intermediate',
    ratingsAverage: 4.6,
    ratingsQuantity: 312,
    price: 599,
    images: 'images/lightroom_mastery.jpeg',
  },
  {
    title: 'Python Programming: From Basics to Advanced Concepts',
    topic: 'Python',
    instructor: '65f1e511fdb59747b6ab6aba',
    category: '65ef1d01dfe1980def4d0c79',
    subcategory: '65ef5bbebe2ea893e675c9c7',
    description:
      'Master Python programming language from the fundamentals to advanced concepts. Learn about data types, control flow, functions, object-oriented programming, and more through hands-on projects and examples.',
    summary:
      "Embark on a comprehensive journey through Python programming with our course, 'Python Programming: From Basics to Advanced Concepts.' Whether you're a complete beginner or looking to expand your Python skills, this course covers everything you need to know. Start with the fundamentals of Python syntax, data types, and control flow, then progress to more advanced topics such as functions, modules, and object-oriented programming. Explore real-world applications of Python through hands-on projects, including web development, data analysis, and automation. With expert guidance and practical exercises, you'll gain the skills and confidence to tackle any Python programming challenge.",
    duration: 24,
    difficulty: 'intermediate',
    ratingsAverage: 4.7,
    ratingsQuantity: 512,
    price: 799,
    images: 'images/python_programming.jpeg',
  },
];

module.exports = courses;
const modulesData = [
  {
    title: 'Introduction to Python',
    module_order: 1,
    description: 'An overview of Python programming language and its features.',
    course: '65f1eb6edb23ab7036566404',
    lessons: [
      {
        title: 'Python Introduction',
        lesson_type: 'video',
        module_id: 'module_id_for_Introduction_to_Python',
        lesson_order: 1,
        content: {
          video_url: 'https://example.com/python-introduction-video',
        },
        duration: 60, // Duration in minutes
      },
      {
        title: 'Python Basics',
        lesson_type: 'document',
        module_id: 'module_id_for_Introduction_to_Python',
        lesson_order: 2,
        content: {
          document_url: 'https://example.com/python-basics-document',
        },
        duration: 30,
      },
      // Adding more lessons
      {
        title: 'Variables and Data Types',
        lesson_type: 'video',
        module_id: 'module_id_for_Introduction_to_Python',
        lesson_order: 3,
        content: {
          video_url: 'https://example.com/python-variables-data-types-video',
        },
        duration: 45,
      },
      {
        title: 'Control Structures',
        lesson_type: 'document',
        module_id: 'module_id_for_Introduction_to_Python',
        lesson_order: 4,
        content: {
          document_url:
            'https://example.com/python-control-structures-document',
        },
        duration: 25,
      },
      {
        title: 'Functions',
        lesson_type: 'video',
        module_id: 'module_id_for_Introduction_to_Python',
        lesson_order: 5,
        content: {
          video_url: 'https://example.com/python-functions-video',
        },
        duration: 50,
      },
      {
        title: 'Lists and Tuples',
        lesson_type: 'document',
        module_id: 'module_id_for_Introduction_to_Python',
        lesson_order: 6,
        content: {
          document_url: 'https://example.com/python-lists-tuples-document',
        },
        duration: 35,
      },
      {
        title: 'Dictionaries',
        lesson_type: 'video',
        module_id: 'module_id_for_Introduction_to_Python',
        lesson_order: 7,
        content: {
          video_url: 'https://example.com/python-dictionaries-video',
        },
        duration: 40,
      },
      {
        title: 'Loops',
        lesson_type: 'document',
        module_id: 'module_id_for_Introduction_to_Python',
        lesson_order: 8,
        content: {
          document_url: 'https://example.com/python-loops-document',
        },
        duration: 30,
      },
      {
        title: 'Exception Handling',
        lesson_type: 'video',
        module_id: 'module_id_for_Introduction_to_Python',
        lesson_order: 9,
        content: {
          video_url: 'https://example.com/python-exception-handling-video',
        },
        duration: 45,
      },
      {
        title: 'Modules and Packages',
        lesson_type: 'document',
        module_id: 'module_id_for_Introduction_to_Python',
        lesson_order: 10,
        content: {
          document_url: 'https://example.com/python-modules-packages-document',
        },
        duration: 35,
      },
    ],
  },
  {
    title: 'Setting Up Python Environment',
    module_order: 2,
    description:
      'Instructions for setting up Python environment on various platforms.',
    course: '65f1eb6edb23ab7036566404',
    lessons: [
      {
        title: 'Installing Python on Windows',
        lesson_type: 'document',
        module_id: 'module_id_for_Setting_Up_Python_Environment',
        lesson_order: 1,
        content: {
          document_url: 'https://example.com/installing-python-windows-guide',
        },
        duration: 30, // Duration in minutes
      },
      {
        title: 'Installing Python on macOS',
        lesson_type: 'document',
        module_id: 'module_id_for_Setting_Up_Python_Environment',
        lesson_order: 2,
        content: {
          document_url: 'https://example.com/installing-python-macos-guide',
        },
        duration: 30,
      },
      {
        title: 'Installing Python on Linux',
        lesson_type: 'document',
        module_id: 'module_id_for_Setting_Up_Python_Environment',
        lesson_order: 3,
        content: {
          document_url: 'https://example.com/installing-python-linux-guide',
        },
        duration: 30,
      },
      {
        title: 'Setting Up a Python Virtual Environment',
        lesson_type: 'document',
        module_id: 'module_id_for_Setting_Up_Python_Environment',
        lesson_order: 4,
        content: {
          document_url: 'https://example.com/python-virtual-environment-guide',
        },
        duration: 20,
      },
      {
        title: 'Configuring IDE for Python Development',
        lesson_type: 'document',
        module_id: 'module_id_for_Setting_Up_Python_Environment',
        lesson_order: 5,
        content: {
          document_url:
            'https://example.com/configuring-ide-python-development-guide',
        },
        duration: 25,
      },
      // Add more lessons as needed
    ],
  },
  {
    title: 'Python Basics: Syntax and Data Types',
    module_order: 3,
    description: 'Fundamental syntax rules and basic data types in Python.',
    course: '65f1eb6edb23ab7036566404',
    lessons: [
      {
        title: 'Python Syntax Overview',
        lesson_type: 'video',
        module_id: 'module_id_for_Python_Basics_Syntax_and_Data_Types',
        lesson_order: 1,
        content: {
          video_url: 'https://example.com/python-syntax-overview-video',
        },
        duration: 40, // Duration in minutes
      },
      {
        title: 'Variables and Assignment',
        lesson_type: 'document',
        module_id: 'module_id_for_Python_Basics_Syntax_and_Data_Types',
        lesson_order: 2,
        content: {
          document_url:
            'https://example.com/variables-assignment-python-document',
        },
        duration: 30,
      },
      {
        title: 'Numeric Data Types',
        lesson_type: 'video',
        module_id: 'module_id_for_Python_Basics_Syntax_and_Data_Types',
        lesson_order: 3,
        content: {
          video_url: 'https://example.com/python-numeric-data-types-video',
        },
        duration: 35,
      },
      {
        title: 'Strings and String Operations',
        lesson_type: 'document',
        module_id: 'module_id_for_Python_Basics_Syntax_and_Data_Types',
        lesson_order: 4,
        content: {
          document_url:
            'https://example.com/strings-operations-python-document',
        },
        duration: 25,
      },
      {
        title: 'Boolean Data Type',
        lesson_type: 'video',
        module_id: 'module_id_for_Python_Basics_Syntax_and_Data_Types',
        lesson_order: 5,
        content: {
          video_url: 'https://example.com/python-boolean-data-type-video',
        },
        duration: 30,
      },
      // Add more lessons as needed
    ],
  },
  {
    title: 'Control Flow in Python',
    module_order: 4,
    description: 'Understanding conditional statements and loops in Python.',
    course: '65f1eb6edb23ab7036566404',
    lessons: [
      {
        title: 'Conditional Statements: If, Else, and Elif',
        lesson_type: 'video',
        module_id: 'module_id_for_Control_Flow_in_Python',
        lesson_order: 1,
        content: {
          video_url: 'https://example.com/python-conditional-statements-video',
        },
        duration: 45, // Duration in minutes
      },
      {
        title: 'Loops: For and While',
        lesson_type: 'document',
        module_id: 'module_id_for_Control_Flow_in_Python',
        lesson_order: 2,
        content: {
          document_url: 'https://example.com/python-loops-document',
        },
        duration: 30,
      },
      {
        title: 'Loop Control Statements: Break and Continue',
        lesson_type: 'video',
        module_id: 'module_id_for_Control_Flow_in_Python',
        lesson_order: 3,
        content: {
          video_url: 'https://example.com/python-loop-control-statements-video',
        },
        duration: 35,
      },
      {
        title: 'Iterating Through Sequences',
        lesson_type: 'document',
        module_id: 'module_id_for_Control_Flow_in_Python',
        lesson_order: 4,
        content: {
          document_url:
            'https://example.com/python-iterating-sequences-document',
        },
        duration: 25,
      },
      {
        title: 'Error Handling with Try and Except',
        lesson_type: 'video',
        module_id: 'module_id_for_Control_Flow_in_Python',
        lesson_order: 5,
        content: {
          video_url: 'https://example.com/python-error-handling-video',
        },
        duration: 40,
      },
      // Add more lessons as needed
    ],
  },
  {
    title: 'Functions and Modules',
    module_order: 5,
    description: 'Creating and using functions, organizing code into modules.',
    course: '65f1eb6edb23ab7036566404',
    lessons: [
      {
        title: 'Introduction to Functions',
        lesson_type: 'video',
        module_id: 'module_id_for_Functions_and_Modules',
        lesson_order: 1,
        content: {
          video_url: 'https://example.com/introduction-to-functions-video',
        },
        duration: 40, // Duration in minutes
      },
      {
        title: 'Defining Functions',
        lesson_type: 'document',
        module_id: 'module_id_for_Functions_and_Modules',
        lesson_order: 2,
        content: {
          document_url: 'https://example.com/defining-functions-document',
        },
        duration: 30,
      },
      {
        title: 'Parameters and Arguments',
        lesson_type: 'video',
        module_id: 'module_id_for_Functions_and_Modules',
        lesson_order: 3,
        content: {
          video_url: 'https://example.com/parameters-and-arguments-video',
        },
        duration: 35,
      },
      {
        title: 'Return Statement',
        lesson_type: 'document',
        module_id: 'module_id_for_Functions_and_Modules',
        lesson_order: 4,
        content: {
          document_url: 'https://example.com/return-statement-document',
        },
        duration: 25,
      },
      {
        title: 'Modules and Importing',
        lesson_type: 'video',
        module_id: 'module_id_for_Functions_and_Modules',
        lesson_order: 5,
        content: {
          video_url: 'https://example.com/modules-and-importing-video',
        },
        duration: 40,
      },
      // Add more lessons as needed
    ],
  },
  {
    title: 'Working with Files in Python',
    module_order: 6,
    description: 'Reading from and writing to files using Python.',
    course: '65f1eb6edb23ab7036566404',
    lessons: [
      {
        title: 'File Input and Output Basics',
        lesson_type: 'video',
        module_id: 'module_id_for_Working_with_Files_in_Python',
        lesson_order: 1,
        content: {
          video_url: 'https://example.com/file-io-basics-video',
        },
        duration: 40, // Duration in minutes
      },
      {
        title: 'Opening and Closing Files',
        lesson_type: 'document',
        module_id: 'module_id_for_Working_with_Files_in_Python',
        lesson_order: 2,
        content: {
          document_url: 'https://example.com/opening-closing-files-document',
        },
        duration: 30,
      },
      {
        title: 'Reading and Writing Text Files',
        lesson_type: 'video',
        module_id: 'module_id_for_Working_with_Files_in_Python',
        lesson_order: 3,
        content: {
          video_url: 'https://example.com/reading-writing-text-files-video',
        },
        duration: 35,
      },
      {
        title: 'Reading and Writing Binary Files',
        lesson_type: 'document',
        module_id: 'module_id_for_Working_with_Files_in_Python',
        lesson_order: 4,
        content: {
          document_url:
            'https://example.com/reading-writing-binary-files-document',
        },
        duration: 25,
      },
      {
        title: 'Working with CSV Files',
        lesson_type: 'video',
        module_id: 'module_id_for_Working_with_Files_in_Python',
        lesson_order: 5,
        content: {
          video_url: 'https://example.com/working-with-csv-files-video',
        },
        duration: 40,
      },
      // Add more lessons as needed
    ],
  },
  {
    title: 'Object-Oriented Programming (OOP) Basics',
    module_order: 7,
    description:
      'Introduction to object-oriented programming paradigm in Python.',
    course: '65f1eb6edb23ab7036566404',
    lessons: [
      {
        title: 'Introduction to File Handling',
        lesson_type: 'video',
        module_id: 'module_id_for_Working_with_Files_in_Python',
        lesson_order: 1,
        content: {
          video_url: 'https://example.com/introduction-to-file-handling-video',
        },
        duration: 45, // Duration in minutes
      },
      {
        title: 'Opening and Closing Files',
        lesson_type: 'document',
        module_id: 'module_id_for_Working_with_Files_in_Python',
        lesson_order: 2,
        content: {
          document_url: 'https://example.com/opening-closing-files-document',
        },
        duration: 30,
      },
      {
        title: 'Reading from Files',
        lesson_type: 'video',
        module_id: 'module_id_for_Working_with_Files_in_Python',
        lesson_order: 3,
        content: {
          video_url: 'https://example.com/reading-from-files-video',
        },
        duration: 40,
      },
      {
        title: 'Writing to Files',
        lesson_type: 'document',
        module_id: 'module_id_for_Working_with_Files_in_Python',
        lesson_order: 4,
        content: {
          document_url: 'https://example.com/writing-to-files-document',
        },
        duration: 25,
      },
      {
        title: 'File Modes and Operations',
        lesson_type: 'video',
        module_id: 'module_id_for_Working_with_Files_in_Python',
        lesson_order: 5,
        content: {
          video_url: 'https://example.com/file-modes-operations-video',
        },
        duration: 35,
      },
      // Add more lessons as needed
    ],
  },
  {
    title: 'Advanced OOP Concepts',
    module_order: 8,
    description: 'In-depth exploration of advanced OOP concepts in Python.',
    course: '65f1eb6edb23ab7036566404',
    lessons: [
      {
        title: 'Introduction to Object-Oriented Programming (OOP)',
        lesson_type: 'video',
        module_id: 'module_id_for_OOP_Basics',
        lesson_order: 1,
        content: {
          video_url: 'https://example.com/oop-introduction-video',
        },
        duration: 45, // Duration in minutes
      },
      {
        title: 'Classes and Objects',
        lesson_type: 'document',
        module_id: 'module_id_for_OOP_Basics',
        lesson_order: 2,
        content: {
          document_url: 'https://example.com/classes-objects-document',
        },
        duration: 30,
      },
      {
        title: 'Attributes and Methods',
        lesson_type: 'video',
        module_id: 'module_id_for_OOP_Basics',
        lesson_order: 3,
        content: {
          video_url: 'https://example.com/attributes-methods-video',
        },
        duration: 40,
      },
      {
        title: 'Inheritance',
        lesson_type: 'document',
        module_id: 'module_id_for_OOP_Basics',
        lesson_order: 4,
        content: {
          document_url: 'https://example.com/inheritance-document',
        },
        duration: 25,
      },
      {
        title: 'Polymorphism',
        lesson_type: 'video',
        module_id: 'module_id_for_OOP_Basics',
        lesson_order: 5,
        content: {
          video_url: 'https://example.com/polymorphism-video',
        },
        duration: 35,
      },
      // Add more lessons as needed
    ],
  },
  {
    title: 'Introduction to Django Framework',
    module_order: 9,
    description: 'Overview of Django web framework and its features.',
    course: '65f1eb6edb23ab7036566404',
    lessons: [
      {
        title: 'What is Django?',
        lesson_type: 'video',
        module_id: 'module_id_for_Introduction_to_Django_Framework',
        lesson_order: 1,
        content: {
          video_url: 'https://example.com/django-introduction-video',
        },
        duration: 45, // Duration in minutes
      },
      {
        title: 'Setting Up Django Environment',
        lesson_type: 'document',
        module_id: 'module_id_for_Introduction_to_Django_Framework',
        lesson_order: 2,
        content: {
          document_url: 'https://example.com/django-setup-document',
        },
        duration: 30,
      },
      {
        title: 'Creating Your First Django Project',
        lesson_type: 'video',
        module_id: 'module_id_for_Introduction_to_Django_Framework',
        lesson_order: 3,
        content: {
          video_url: 'https://example.com/first-django-project-video',
        },
        duration: 40,
      },
      {
        title: 'Understanding Django Components',
        lesson_type: 'document',
        module_id: 'module_id_for_Introduction_to_Django_Framework',
        lesson_order: 4,
        content: {
          document_url: 'https://example.com/django-components-document',
        },
        duration: 25,
      },
      {
        title: 'Django Project Structure',
        lesson_type: 'video',
        module_id: 'module_id_for_Introduction_to_Django_Framework',
        lesson_order: 5,
        content: {
          video_url: 'https://example.com/django-project-structure-video',
        },
        duration: 35,
      },
      // Add more lessons as needed
    ],
  },
  {
    title: 'Building Web Applications with Django',
    module_order: 10,
    description: 'Creating web applications using Django framework.',
    course: '65f1eb6edb23ab7036566404',
    lessons: [
      {
        title: 'Creating Django Apps',
        lesson_type: 'video',
        module_id: 'module_id_for_Building_Web_Applications_with_Django',
        lesson_order: 1,
        content: {
          video_url: 'https://example.com/django-apps-creation-video',
        },
        duration: 45, // Duration in minutes
      },
      {
        title: 'Routing and Views',
        lesson_type: 'document',
        module_id: 'module_id_for_Building_Web_Applications_with_Django',
        lesson_order: 2,
        content: {
          document_url: 'https://example.com/django-routing-views-document',
        },
        duration: 30,
      },
      {
        title: 'Templates and Template Language',
        lesson_type: 'video',
        module_id: 'module_id_for_Building_Web_Applications_with_Django',
        lesson_order: 3,
        content: {
          video_url: 'https://example.com/django-templates-video',
        },
        duration: 40,
      },
      {
        title: 'Database Models and ORM',
        lesson_type: 'document',
        module_id: 'module_id_for_Building_Web_Applications_with_Django',
        lesson_order: 4,
        content: {
          document_url: 'https://example.com/django-database-models-document',
        },
        duration: 25,
      },
      {
        title: 'Forms Handling',
        lesson_type: 'video',
        module_id: 'module_id_for_Building_Web_Applications_with_Django',
        lesson_order: 5,
        content: {
          video_url: 'https://example.com/django-forms-handling-video',
        },
        duration: 35,
      },
      // Add more lessons as needed
    ],
  },
  {
    title: 'Database Integration with Django',
    module_order: 11,
    description: 'Integrating databases with Django for data persistence.',
    course: '65f1eb6edb23ab7036566404',
    lessons: [
      {
        title: 'Introduction to Database Integration',
        lesson_type: 'video',
        module_id: 'module_id_for_Database_Integration_with_Django',
        lesson_order: 1,
        content: {
          video_url: 'https://example.com/database-integration-intro-video',
        },
        duration: 45, // Duration in minutes
      },
      {
        title: 'Setting Up Database Connections',
        lesson_type: 'document',
        module_id: 'module_id_for_Database_Integration_with_Django',
        lesson_order: 2,
        content: {
          document_url:
            'https://example.com/database-connections-setup-document',
        },
        duration: 30,
      },
      {
        title: 'Defining Models and Migrations',
        lesson_type: 'video',
        module_id: 'module_id_for_Database_Integration_with_Django',
        lesson_order: 3,
        content: {
          video_url: 'https://example.com/models-migrations-video',
        },
        duration: 40,
      },
      {
        title: 'Querying Data with Django ORM',
        lesson_type: 'document',
        module_id: 'module_id_for_Database_Integration_with_Django',
        lesson_order: 4,
        content: {
          document_url: 'https://example.com/django-orm-querying-document',
        },
        duration: 25,
      },
      {
        title: 'Database Relationships',
        lesson_type: 'video',
        module_id: 'module_id_for_Database_Integration_with_Django',
        lesson_order: 5,
        content: {
          video_url: 'https://example.com/database-relationships-video',
        },
        duration: 35,
      },
      // Add more lessons as needed
    ],
  },
  {
    title: 'Django Templates and Forms',
    module_order: 12,
    description:
      'Creating and using templates and forms in Django applications.',
    course: '65f1eb6edb23ab7036566404',
    lessons: [
      {
        title: 'Introduction to Django Templates',
        lesson_type: 'video',
        module_id: 'module_id_for_Django_Templates_and_Forms',
        lesson_order: 1,
        content: {
          video_url: 'https://example.com/django-templates-introduction-video',
        },
        duration: 45, // Duration in minutes
      },
      {
        title: 'Template Syntax',
        lesson_type: 'document',
        module_id: 'module_id_for_Django_Templates_and_Forms',
        lesson_order: 2,
        content: {
          document_url: 'https://example.com/django-template-syntax-document',
        },
        duration: 30,
      },
      {
        title: 'Template Inheritance',
        lesson_type: 'video',
        module_id: 'module_id_for_Django_Templates_and_Forms',
        lesson_order: 3,
        content: {
          video_url: 'https://example.com/django-template-inheritance-video',
        },
        duration: 40,
      },
      {
        title: 'Introduction to Django Forms',
        lesson_type: 'document',
        module_id: 'module_id_for_Django_Templates_and_Forms',
        lesson_order: 4,
        content: {
          document_url:
            'https://example.com/django-forms-introduction-document',
        },
        duration: 25,
      },
      {
        title: 'Form Handling and Validation',
        lesson_type: 'video',
        module_id: 'module_id_for_Django_Templates_and_Forms',
        lesson_order: 5,
        content: {
          video_url:
            'https://example.com/django-forms-handling-validation-video',
        },
        duration: 35,
      },
      // Add more lessons as needed
    ],
  },
  {
    title: 'Handling User Authentication in Django',
    module_order: 13,
    description:
      'Implementing user authentication and authorization in Django.',
    course: '65f1eb6edb23ab7036566404',
    lessons: [
      {
        title: 'User Authentication Overview',
        lesson_type: 'video',
        module_id: 'module_id_for_Handling_User_Authentication_in_Django',
        lesson_order: 1,
        content: {
          video_url:
            'https://example.com/django-user-authentication-overview-video',
        },
        duration: 45, // Duration in minutes
      },
      {
        title: 'User Registration and Login',
        lesson_type: 'document',
        module_id: 'module_id_for_Handling_User_Authentication_in_Django',
        lesson_order: 2,
        content: {
          document_url:
            'https://example.com/django-user-registration-login-document',
        },
        duration: 30,
      },
      {
        title: 'Password Reset Functionality',
        lesson_type: 'video',
        module_id: 'module_id_for_Handling_User_Authentication_in_Django',
        lesson_order: 3,
        content: {
          video_url: 'https://example.com/django-password-reset-video',
        },
        duration: 40,
      },
      {
        title: 'User Permissions and Authorization',
        lesson_type: 'document',
        module_id: 'module_id_for_Handling_User_Authentication_in_Django',
        lesson_order: 4,
        content: {
          document_url:
            'https://example.com/django-user-permissions-authorization-document',
        },
        duration: 25,
      },
      {
        title: 'Social Authentication with Django',
        lesson_type: 'video',
        module_id: 'module_id_for_Handling_User_Authentication_in_Django',
        lesson_order: 5,
        content: {
          video_url: 'https://example.com/django-social-authentication-video',
        },
        duration: 35,
      },
      // Add more lessons as needed
    ],
  },
  {
    title: 'Deploying Django Applications',
    module_order: 14,
    description:
      'Strategies for deploying Django applications to production servers.',
    course: '65f1eb6edb23ab7036566404',
    lessons: [
      {
        title: 'Deployment Overview',
        lesson_type: 'video',
        module_id: 'module_id_for_Deploying_Django_Applications',
        lesson_order: 1,
        content: {
          video_url: 'https://example.com/django-deployment-overview-video',
        },
        duration: 45, // Duration in minutes
      },
      {
        title: 'Choosing a Hosting Provider',
        lesson_type: 'document',
        module_id: 'module_id_for_Deploying_Django_Applications',
        lesson_order: 2,
        content: {
          document_url: 'https://example.com/django-hosting-provider-document',
        },
        duration: 30,
      },
      {
        title: 'Setting Up Production Environment',
        lesson_type: 'video',
        module_id: 'module_id_for_Deploying_Django_Applications',
        lesson_order: 3,
        content: {
          video_url:
            'https://example.com/django-production-environment-setup-video',
        },
        duration: 40,
      },
      {
        title: 'Configuring Web Servers',
        lesson_type: 'document',
        module_id: 'module_id_for_Deploying_Django_Applications',
        lesson_order: 4,
        content: {
          document_url:
            'https://example.com/django-configuring-web-servers-document',
        },
        duration: 25,
      },
      {
        title: 'Database Configuration for Production',
        lesson_type: 'video',
        module_id: 'module_id_for_Deploying_Django_Applications',
        lesson_order: 5,
        content: {
          video_url:
            'https://example.com/django-database-configuration-production-video',
        },
        duration: 35,
      },
      // Add more lessons as needed
    ],
  },
  {
    title: 'Advanced Topics: RESTful APIs and Testing in Django',
    module_order: 15,
    description:
      'Exploring advanced topics like building RESTful APIs and testing Django applications.',
    course: '65f1eb6edb23ab7036566404',
    lessons: [
      {
        title: 'Introduction to RESTful APIs',
        lesson_type: 'video',
        module_id:
          'module_id_for_Advanced_Topics_RESTful_APIs_and_Testing_in_Django',
        lesson_order: 1,
        content: {
          video_url: 'https://example.com/restful-apis-introduction-video',
        },
        duration: 45, // Duration in minutes
      },
      {
        title: 'Building RESTful APIs with Django REST Framework',
        lesson_type: 'document',
        module_id:
          'module_id_for_Advanced_Topics_RESTful_APIs_and_Testing_in_Django',
        lesson_order: 2,
        content: {
          document_url: 'https://example.com/django-rest-framework-document',
        },
        duration: 30,
      },
      {
        title: 'Testing in Django',
        lesson_type: 'video',
        module_id:
          'module_id_for_Advanced_Topics_RESTful_APIs_and_Testing_in_Django',
        lesson_order: 3,
        content: {
          video_url: 'https://example.com/testing-in-django-video',
        },
        duration: 40,
      },
      {
        title: 'Test-Driven Development (TDD)',
        lesson_type: 'document',
        module_id:
          'module_id_for_Advanced_Topics_RESTful_APIs_and_Testing_in_Django',
        lesson_order: 4,
        content: {
          document_url: 'https://example.com/test-driven-development-document',
        },
        duration: 25,
      },
      {
        title: 'Automated Testing Tools',
        lesson_type: 'video',
        module_id:
          'module_id_for_Advanced_Topics_RESTful_APIs_and_Testing_in_Django',
        lesson_order: 5,
        content: {
          video_url: 'https://example.com/automated-testing-tools-video',
        },
        duration: 35,
      },
      // Add more lessons as needed
    ],
  },
];

module.exports = modulesData;

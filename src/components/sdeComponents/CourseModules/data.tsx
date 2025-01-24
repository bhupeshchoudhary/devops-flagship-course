import { Module } from './types'

export const modules: Module[] = [
  {
    "id": 1,
    "title": "Module 1",
    "subtitle": "Data Structures and Time Complexity",
    "topics": [
      {
        "id": 2,  
        "title": "Programming Basics (C++ & Python):",
        "content": [
          "Data types, variables, loops, functions, and conditionals.",
          "Input/output handling.",
        ]
          
        },
        {
          "id":3,
          "title":"Introduction to DSA:",
          "content":[
          "Importance and real-world applications of DSA.",
          "Overview of problem-solving with algorithms.",
        ]
        },
        {
         "id":4,
          "title":"Complexity Analysis:",
          "content":[
          "Understanding time complexity: Big O, Big Omega, Big Theta notations.",
          "Space complexity basics.",
          "Common complexities: O(1), O(log n), O(n), O(n log n), O(n²).",
          "Analyzing examples for complexity.",
        ]
      },
    ]
  },

  {
    "id": 2,
    "title": "Module 2",
    "subtitle": "Arrays and Strings",
    "topics": [
      {
        "id": 1,
        "title": "Arrays:",
        "content": [
          "Introduction, declaration, and initialization in C++ and Python.",
          "Traversal, insertion, deletion, and searching in arrays.",
          "Two-dimensional arrays and matrix manipulation.",
         ]
      },
      {
          "id": 2,
        "title":"Strings:",
        "content":[
         "String handling and methods in Python (len, join, split) and C++ (std::string).",
         "Common operations: reverse, palindrome check, anagrams, and substring search.",
        ]
      },
      
     
    ]
  },


  {
    "id": 3,
    "title": "Module 3",
    "subtitle": "Recursion and Errror Handling",
    "topics": [
      {
        "id": 1,
        "title": "Recursion Basics:",
        "content": [
          "Understanding recursion with examples (factorial, Fibonacci).",
          "Stack memory visualization for recursion calls.",
          "Recursive problems and their applications.", 
        ]
      },
      {
          "id": 2,
        "title":"Error Handling:",
         "content":[
          "Try-catch blocks and exceptions.",
          "Debugging techniques and tools.",
        ]
        },
        
    ]
},


{
  "id": 4,
  "title": "Module 4",
  "subtitle": "Searching Algorithms",
  "topics": [
    {
      "id": 1,
      "title": "Searching Algorithms:",
      "content": [
       "Linear Search, Binary Search.",
       "Recursive and iterative implementations.",
       "Analysis of time complexity of searching algorithms.",
      ]
    },
    
  ]
},
{
  "id": 5,
  "title": "Module 5",
  "subtitle": " Sorting Algorithms",
  "topics": [
    {
      "id": 1,
      "title": "Sorting Algorithms:",
      "content": [
        "Bubble Sort, Selection Sort, Insertion Sort.", 
        "Quick Sort, Merge Sort (Divide & Conquer).",
        "Time and Space Complexity Analysis.",
        "Practical Use Cases: When to use which sorting algorithm.",]
    },
  ]
  },
    {
      "id": 6,
      "title": "Module 6",
      "subtitle": "Linked Lists (Singly, Doubly, Circular)",
      "topics": [
        {
          "id": 1,
          "title": "Singly Linked List:",
          "content": [
           "Definition, creation, traversal, insertion, deletion.",
           "Applications of singly linked lists.",
          ]
        },
        {
            "id": 2,
          "title": "Doubly Linked List:",
          "content":[
              "Understanding pointers for next and prev.",
              "Common operations and use cases.",
           ]
        },
        {
            "id": 3,
          "title": "Circular Linked List:",
          "content":[
            "Circular traversal and operations.",
            "Complexity Analysis for common operations in linked lists.",]
        },
        
      ]
  },
  {
    "id": 7,
    "title": "Module 7",
    "subtitle": "Stacks and Queues",
    "topics": [
      {
        "id": 1,
        "title": "Introduction to Linux for DevOps",
        "content": [
          "Why Linux for DevOps?",
          "Importance of Linux in cloud computing, automation, and containerized environments.",
          "Key Linux features enabling DevOps practices: security, stability, and scalability.",
          "Industry Use Cases:",
          "Overview of popular distributions like Ubuntu, CentOS, RHEL, and Alpine Linux for specific DevOps workflows."
        ]
      },
      {
        "id": 2,
        "title": "Linux Architecture and Command-Line Basics",
        "content": [
          "Linux Architecture:",
          "Deep dive into the Linux kernel and its interaction with hardware.",
          "The role of shell and its variants (bash, zsh).",
          "File system hierarchy and key directories (/etc, /var, /home, /proc).",
        ]
      },
      {
          "id": 1,
          "title":"Command-Line Basics:",
          "content":[
          "Navigation and file management commands: ls, cd, mv, cp, rm.",
          "Searching files with find, locate, and grep.",
          "Viewing and editing files with cat, less, nano, and vim."
        ]
      },
      {
        "id": 3,
        "title": "User and Permission Management",
        "content": [
          "User and Group Management:",
          "Creating, modifying, and deleting users and groups using useradd, usermod, and groupadd.",
          "Understanding user-related configuration files: /etc/passwd, /etc/group, /etc/shadow.",
        ]
      },
      {
        "id": 1,
        "title":"Permissions and Ownership:",
        "content":[
          "File and directory permissions (read, write, execute).",
          "Changing ownership with chown and managing permissions with chmod.",
        ]
      },
          
      {
        "id": 1,
        "title":"Advanced Permissions:",
        "content":[
          "Using Access Control Lists (ACLs) for fine-grained permission management.",
          "Managing default permissions with umask."
        ]
      },
      {
        "id": 4,
        "title": "Process and Service Management",
        "content": [
          "Managing Processes:",
          "Monitoring and controlling processes with ps, top, htop, kill, and nice.",
          "Identifying zombie and orphan processes.",
        ]
      },
          
      {
        "id": 1,
        "title":"Systemd and Service Management:",
        "content":[
          "Understanding systemd, unit files, and their types (service, timer, target).",
          "Managing services using systemctl for start, stop, enable, and disable operations.",
          "Writing and deploying custom systemd services."
        ]
      },
      {
        "id": 5,
        "title": "Networking and Security Essentials",
        "content": [
          "Network Configuration:",
          "Viewing and configuring network interfaces with ifconfig and ip.",
          "Network troubleshooting tools: ping, netstat, ss, traceroute, and curl.",
        ]
      },
         
      {
        "id": 1,
        "title":"Firewall Management:",
        "content":[
          "Configuring and managing firewall rules using iptables and firewalld.",
          "Setting up NAT and port forwarding rules.",
        ]
      },
          
      {
        "id": 1,
        "title":"SSH Configuration:",
        "content":[
          "Securing SSH by disabling root login and modifying default ports.",
          "Configuring SSH keys for passwordless authentication."
        ]
      },
      {
        "id": 6,
        "title": "File Systems and Storage Management",
        "content": [
          "File System Basics:",
          "Partitioning and formatting disks with fdisk, parted, and mkfs.",
          "Mounting and unmounting file systems with mount and umount.",
        ]
      },
         
      {
        "id": 1,
        "title":"LVM and RAID:",
        "content":[
          "Configuring logical volumes with lvcreate, vgcreate, and pvcreate.",
          "Setting up RAID arrays with mdadm for redundancy and performance.",
        ]
      },
         
      {
        "id": 1,
        "title": "File System Troubleshooting:",
        "content":[
          "Diagnosing issues with fsck, df, and du.",
          "Resolving disk space issues and managing inodes."
        ]
      },
      {
        "id": 7,
        "title": "Automation and Scripting",
        "content": [
          "Shell Scripting Basics:",
          "Writing scripts to automate repetitive tasks.",
          "Working with variables, loops (for, while), and conditionals (if, case).",
        ]
      },
        
      {
        "id": 1,
        "title":"Automating Tasks with Cron and At:",
        "content":[
          "Scheduling periodic tasks using cron.",
          "Managing one-time jobs with at and batch.",
        ]
      },
      {
        "id": 1,
        "title":"Industry Use Cases:",
        "content":[
          "Writing scripts for system backups and updates.",
          "Automating system monitoring and alerting processes."
        ]
      },
      {
        "id": 8,
        "title": "Package Management and Software Installation",
        "content": [
          "Package Management:",
          "Installing, upgrading, and removing software using apt, yum, and dnf.",
          "Querying and troubleshooting packages.",
        ]
      },
         
      {
        "id": 1,
        "title":"Source-Based Installation:",
        "content":[
          "Compiling software from source using make and gcc.",
          "Resolving dependencies with tools like pkg-config."
        ]
      },
      {
        "id": 9,
        "title": "Monitoring and Performance Tuning",
        "content": [
          "Monitoring Tools:",
          "System performance monitoring using vmstat, iostat, and sar.",
          "Log management with journalctl, rsyslog, and logrotate.",
        ]
      },
      {
        "id": 1,
        "title": "Performance Optimization:",
        "content":[
          "Kernel parameter tuning using sysctl.",
          "Optimizing memory usage, disk I/O, and CPU performance."
        ]
      },
      {
        "id": 10,
        "title": "Security and Compliance",
        "content": [
          "System Hardening:",
          "Disabling unnecessary services and ports.",
          "Keeping systems secure with regular updates and patches.",
        ]
      },
         
      {
        "id": 1,
        "title":"Auditing and Compliance:",
        "content":[
          "Using auditd for tracking system changes and events.",
          "Ensuring compliance with security policies using log auditing."
        ]
      }
    ]
  }
  
  
  
]
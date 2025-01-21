import { Module } from './types'

export const modules: Module[] = [
  {
    "id": 1,
    "title": "**Module 1**",
    "subtitle": "**Advanced Version Control with Git and GitHub**",
    "topics": [
      {
        "id": 1,
        "title": "**Git Essentials**",
        "content": [
          "**Introduction to Version Control:**",
          "Understand the significance of version control and the problems it solves in collaborative development.",
          "**Git Basics Refresher:**",
          "Installing and configuring Git.",
          "Initializing a Git repository and understanding .git directory structure.",
          "Basic commands: `git add`, `git commit`, `git status`, `git log`.",
          "Configuring user information: username, email, and aliases for command-line efficiency.",
          "**File Lifecycle in Git:**",
          "From untracked to committed.",
          "Staging area and working directory concepts."
        ]
      },
      {
        "id": 2,
        "title": "**Advanced Git Concepts**",
        "content": [
          "**Deep Dive into Git Internals:**",
          "How Git tracks changes using commit objects, blobs, and trees.",
          "SHA-1 hashes and their role in versioning.",
          "**Branching Strategies:**",
          "Creating, merging, and deleting branches (`git branch`, `git merge`, `git branch -d`).",
          "GitFlow Workflow: Release, hotfix, and feature branches.",
          "Trunk-Based Development: When and why to use it.",
          "**Merge and Rebase Strategies:**",
          "Handling fast-forward and recursive merges.",
          "Resolving conflicts effectively with `git merge` and `git mergetool`.",
          "Interactive Rebase: Cleaning up commit history (`git rebase -i`) and resolving rebase conflicts.",
          "**Git Stash:**",
          "Temporary storage of changes (`git stash save`, `git stash apply`, `git stash pop`).",
          "Managing multiple stashes and resolving conflicts from stashed changes.",
          "**Git Submodules:**",
          "Adding submodules to a repository (`git submodule add`).",
          "Updating and cloning repositories with submodules.",
          "**Git Hooks:**",
          "Automating workflows with pre-commit, post-merge, and pre-push hooks.",
          "Example: Using a pre-commit hook to enforce code formatting."
        ]
      },
      {
        "id": 3,
        "title": "**GitHub for Collaboration**",
        "content": [
          "**Repository Management:**",
          "Creating repositories: Private, public, and internal visibility.",
          "Managing access controls with teams and collaborators.",
          "Forking, cloning, and synchronizing repositories.",
          "**Pull Requests and Code Reviews:**",
          "Creating pull requests and adding reviewers.",
          "Handling review comments and suggested changes.",
          "Enabling branch protection rules to enforce quality standards.",
          "**GitHub Actions:**",
          "Introduction to GitHub Actions: Benefits and use cases.",
          "Writing workflows using YAML for automating CI/CD.",
          "Prebuilt actions from GitHub Marketplace for testing, building, and deploying.",
          "**Issue Tracking and Project Boards:**",
          "Creating, assigning, and labeling issues.",
          "Using GitHub Project Boards to organize tasks (Kanban-style).",
          "Automating issue tracking with workflows.",
          "**Publishing Documentation:**",
          "Using GitHub Pages for static site hosting.",
          "Creating and publishing project documentation (README, Wiki, and Pages)."
        ]
      }
    ]
  },  

  {
    "id": 2,
    "title": "Module 2",
    "subtitle": "Continuous Integration and Continuous Delivery (CI/CD)",
    "topics": [
      {
        "id": 1,
        "title": "Jenkins: Automating CI/CD with Advanced Pipelines",
        "content": [
          "Jenkins Setup:",
          "Installing Jenkins on various platforms (Linux, Docker).",
          "Configuring Jenkins Master-Slave architecture for distributed builds.",
          "Setting up agents for load balancing and scalability in build processes.",
          "Pipeline as Code:",
          "Writing and managing Declarative Pipelines using Jenkinsfile.",
          "Multi-branch pipelines for handling complex workflows in Git repositories.",
          "Configuring stages for build, test, and deploy with parallel executions.",
          "Integration with DevOps Tools:",
          "Connecting Jenkins with Git for version control.",
          "Automating builds with Maven and managing dependencies efficiently.",
          "Building and publishing Docker images directly from Jenkins.",
          "Automating Tests and Deployments:",
          "Integrating with testing frameworks like JUnit and Selenium for automated test execution.",
          "Deploying applications to Kubernetes, AWS, or other platforms from Jenkins pipelines.",
          "Advanced Jenkins Plugins:",
          "Artifactory Plugin: Managing and publishing artifacts to repositories.",
          "SonarQube Integration: Performing static code analysis for quality assurance.",
          "Kubernetes Plugin: Deploying and scaling workloads on Kubernetes clusters.",
          "Blue Ocean: Simplified visualization and management of Jenkins pipelines."
        ]
      },
      {
        "id": 2,
        "title": "GitLab CI/CD: Simplifying and Automating Workflows",
        "content": [
          "Introduction to GitLab CI/CD:",
          "Understanding GitLab runners and their role in executing jobs.",
          "Setting up a .gitlab-ci.yml file for defining CI/CD pipelines.",
          "Building Multi-Stage Pipelines:",
          "Writing multi-stage pipelines for building, testing, and deploying applications.",
          "Managing parallel and sequential jobs to optimize build times.",
          "Containerized Application Builds:",
          "Using Docker in GitLab runners to build containerized applications.",
          "Publishing Docker images to GitLab Container Registry or Docker Hub.",
          "GitLab Auto DevOps:",
          "Leveraging Auto DevOps for automatic build, test, and deploy workflows.",
          "Customizing Auto DevOps templates for specific project requirements.",
          "Secrets and Variables Management:",
          "Storing and using sensitive data (API keys, passwords) securely within pipelines.",
          "Configuring environment-specific variables for staging and production environments."
        ]
      },
      {
        "id": 3,
        "title": "CircleCI: Optimizing Build and Delivery Processes",
        "content": [
          "Introduction to CircleCI:",
          "Setting up a CircleCI account and integrating with GitHub or GitLab repositories.",
          "Using config.yml for defining workflows, jobs, and steps.",
          "Efficient Workflow Management:",
          "Configuring pipelines with multiple workflows for build, test, and deploy stages.",
          "Utilizing caching mechanisms to speed up repetitive tasks (e.g., dependency installation).",
          "Parallelism and Resource Optimization:",
          "Running tests and builds in parallel to reduce pipeline execution times.",
          "Optimizing resource allocation using CircleCI’s resource classes.",
          "Reusable CircleCI Orbs:",
          "Understanding and utilizing Orbs for prebuilt tasks (e.g., Docker, Kubernetes, AWS).",
          "Writing custom Orbs for specific project needs."
        ]
      }
    ]
  },


  {
    "id": 3,
    "title": "Module 3",
    "subtitle": "Containerization and Orchestration",
    "topics": [
      {
        "id": 1,
        "title": "Docker: Building and Managing Containers",
        "content": [
          "Introduction to Docker:",
          "Core concepts of containers, images, and the Docker Engine.",
          "Differences between containers and virtual machines.",
          "Writing Efficient Dockerfiles:",
          "Creating lightweight and optimized Docker images.",
          "Multi-stage builds to reduce image size and improve security.",
          "Best practices for layer caching and minimizing build times.",
          "Docker Compose:",
          "Defining multi-container applications using docker-compose.yml.",
          "Managing services, networks, and volumes for multi-container setups.",
          "Common use cases: Microservices, LAMP/LEMP stacks, and local development environments.",
          "Docker Networking:",
          "Understanding default networks: Bridge, host, and none.",
          "Configuring custom networks for container communication.",
          "Overlay networks for multi-host communication.",
          "Docker Security:",
          "Scanning images for vulnerabilities using tools like Snyk and Docker Scan.",
          "Managing secrets and sensitive data in Docker containers.",
          "Restricting container capabilities for enhanced security."
        ]
      },
      {
        "id": 2,
        "title": "Podman: Rootless Container Management",
        "content": [
          "Introduction to Podman:",
          "Understanding the differences between Podman and Docker.",
          "Benefits of rootless architecture for enhanced security.",
          "Managing Containers and Pods:",
          "Creating and managing containers without a central daemon.",
          "Working with pods to group containers and share resources.",
          "Migrating from Docker to Podman:",
          "Using Docker-compatible commands for a seamless transition.",
          "Converting docker-compose.yml to Podman-supported configurations."
        ]
      },
      {
        "id": 3,
        "title": "Kubernetes: Advanced Orchestration",
        "content": [
          "Core Kubernetes Concepts:",
          "Brief overview of Pods, Deployments, and Services.",
          "Advanced Pod Scheduling:",
          "Node Affinity and Anti-Affinity for controlling pod placement.",
          "Using Taints and Tolerations to schedule pods on specific nodes.",
          "Workload Scaling:",
          "Configuring Horizontal Pod Autoscaler (HPA) to scale pods based on CPU and memory usage.",
          "Using Vertical Pod Autoscaler (VPA) to adjust pod resource requests and limits.",
          "Kubernetes Networking:",
          "Setting up Ingress Controllers for HTTP/HTTPS routing.",
          "Defining Network Policies to control communication between pods.",
          "Persistent Storage:",
          "Creating Persistent Volumes (PVs) and Persistent Volume Claims (PVCs).",
          "Using StorageClasses for dynamic volume provisioning.",
          "Kubernetes Observability:",
          "Setting up metrics-server for resource monitoring.",
          "Integrating Prometheus and Grafana for advanced observability.",
          "Kubernetes Security:",
          "Implementing Role-Based Access Control (RBAC) for fine-grained access control.",
          "Configuring PodSecurityPolicy to enforce security constraints.",
          "Managing secrets for storing sensitive information securely."
        ]
      },
      {
        "id": 4,
        "title": "Docker Swarm: Lightweight Container Orchestration",
        "content": [
          "Setting Up a Swarm Cluster:",
          "Initializing a Docker Swarm manager and adding worker nodes.",
          "Deploying services to a Swarm cluster.",
          "Secrets and Config Management:",
          "Storing and managing sensitive information using Swarm secrets.",
          "Deploying services with environment-specific configurations.",
          "Scaling and Load Balancing:",
          "Scaling services horizontally to handle increased traffic.",
          "Configuring built-in load balancing for Swarm services."
        ]
      },
      {
        "id": 5,
        "title": "OpenShift: Enterprise-Grade Container Orchestration",
        "content": [
          "Introduction to OpenShift:",
          "Understanding OpenShift architecture and its enterprise features.",
          "Differences between Kubernetes and OpenShift.",
          "Application Deployment in OpenShift:",
          "Using OpenShift templates and Operators for automated deployments.",
          "Setting up CI/CD pipelines with OpenShift Pipelines.",
          "OpenShift Security:",
          "Managing authentication and authorization using OpenShift RBAC.",
          "Securely handling secrets and configuration data in OpenShift."
        ]
      }
    ]
},


{
  "id": 4,
  "title": "Module 4",
  "subtitle": "Infrastructure as Code (IaC)",
  "topics": [
    {
      "id": 1,
      "title": "Terraform: Infrastructure Provisioning Made Easy",
      "content": [
        "Introduction to Terraform:",
        "Overview of Infrastructure as Code (IaC) and the role of Terraform.",
        "Setting up Terraform CLI and understanding the execution workflow: plan, apply, and destroy.",
        "Understanding the provider ecosystem (e.g., AWS, Azure, GCP).",
        "Writing Reusable Modules:",
        "Creating modules for frequently used infrastructure components (e.g., VPC, EC2, RDS).",
        "Utilizing variables, outputs, and locals for dynamic and parameterized modules.",
        "Best practices for module versioning and module registries.",
        "State Management:",
        "Understanding the Terraform state file and its role in resource tracking.",
        "Remote state management using backends like S3, Azure Blob Storage, and GCS.",
        "Locking strategies to avoid state file conflicts in team environments.",
        "Secure storage of sensitive information in state files.",
        "Multi-Cloud Provisioning:",
        "Provisioning infrastructure on multiple cloud platforms simultaneously.",
        "Managing cloud-specific configurations with provider blocks.",
        "Implementing environment-specific configurations using workspaces.",
        "Advanced Terraform Features:",
        "Dynamic blocks for repetitive resource definitions.",
        "Using Terraform Cloud/Enterprise for team collaboration and automated workflows.",
        "Terraform with CI/CD pipelines for automated infrastructure changes."
      ]
    },
    {
      "id": 2,
      "title": "Ansible: Configuration Management and Automation",
      "content": [
        "Introduction to Ansible:",
        "Understanding agentless architecture and push-based automation.",
        "Setting up Ansible inventory (static and dynamic) for managing hosts.",
        "Core components: Playbooks, roles, and modules.",
        "Writing Modular Playbooks and Roles:",
        "Structuring playbooks for readability and reusability.",
        "Writing roles with default variables, tasks, handlers, and templates.",
        "Organizing roles with dependencies and Ansible Galaxy integration.",
        "Ansible Vault:",
        "Encrypting sensitive information like API keys and passwords using Ansible Vault.",
        "Managing decryption in CI/CD pipelines for secure automation.",
        "Automating Patch Management:",
        "Creating playbooks for automated Linux server patching with package managers (e.g., yum, apt).",
        "Scheduling periodic patching using tools like cron or Ansible AWX.",
        "Optimizing Ansible Performance:",
        "Using fact caching for faster execution.",
        "Implementing asynchronous tasks and parallel execution.",
        "Leveraging ansible-pull for pull-based configurations.",
        "Integrating Ansible with Other Tools:",
        "Configuring cloud resources (e.g., AWS, Azure, GCP) using Ansible modules.",
        "Managing Kubernetes configurations with Ansible.",
        "Integrating with Terraform for post-provisioning tasks (e.g., application deployment)."
      ]
    }
  ]
},
{
  "id": 5,
  "title": "Module 5",
  "subtitle": "Monitoring & Observability",
  "topics": [
    {
      "id": 1,
      "title": "Prometheus & Grafana",
      "content": [
        "Prometheus:",
        "Introduction to Prometheus and its role in observability.",
        "Setting up Prometheus with custom configuration for scraping targets.",
        "Writing PromQL queries for real-time metrics analysis, including:",
        "Aggregations (e.g., rate(), sum()).",
        "Functions for anomaly detection.",
        "Building multi-dimensional metrics.",
        "Managing Prometheus exporters for system and application metrics (e.g., Node Exporter, Blackbox Exporter).",
        "Alerting with Alertmanager: Setting up alerts for threshold breaches and downtimes.",
        "Grafana:",
        "Installing and configuring Grafana for visualizing Prometheus metrics.",
        "Advanced dashboard creation:",
        "Custom panels with thresholds, trends, and correlation metrics.",
        "Templates and variables for dynamic visualizations.",
        "Integrating Grafana with multiple data sources (e.g., Prometheus, Loki, and cloud services).",
        "Exporting dashboards and automating their deployment with Grafana APIs."
      ]
    },
    {
      "id": 2,
      "title": "ELK Stack (Elasticsearch, Logstash, Kibana)",
      "content": [
        "Elasticsearch:",
        "Setting up Elasticsearch clusters for scalability and redundancy.",
        "Managing indices, shards, and replicas for efficient data querying.",
        "Querying logs using the Elasticsearch Query DSL (e.g., match queries, aggregations).",
        "Logstash:",
        "Configuring Logstash pipelines for ingesting and transforming log data.",
        "Applying filters to parse logs (e.g., Grok, mutate, and date filters).",
        "Using Logstash plugins for enrichment (e.g., GeoIP and DNS).",
        "Kibana:",
        "Creating detailed and actionable dashboards in Kibana.",
        "Configuring visualizations for log trends, errors, and user activity.",
        "Setting up Kibana alerts for operational insights."
      ]
    },
    {
      "id": 3,
      "title": "Splunk",
      "content": [
        "Introduction to Splunk:",
        "Overview of Splunk architecture: Forwarders, indexers, and search heads.",
        "Configuring Splunk forwarders for log ingestion from applications and systems.",
        "Real-Time Log Aggregation:",
        "Setting up data inputs for various sources (e.g., HTTP Event Collector, syslog).",
        "Creating Splunk queries using the Splunk Processing Language (SPL) for:",
        "Log filtering.",
        "Anomaly detection with statistical models.",
        "Trend analysis.",
        "Monitoring and Alerting:",
        "Configuring alerts for log anomalies and system performance.",
        "Setting up dashboards for infrastructure health and application metrics."
      ]
    }
  ]
  },
    {
      "id": 6,
      "title": "Module 6",
      "subtitle": "DevSecOps and Build Tools",
      "topics": [
        {
          "id": 1,
          "title": "SonarQube for Static Code Analysis",
          "content": [
            "Introduction to Static Code Analysis:",
            "What is static code analysis, and why is it critical in modern DevSecOps pipelines?",
            "Overview of SonarQube and its integration with DevOps workflows.",
            "SonarQube Setup:",
            "Installing and configuring SonarQube server and scanner.",
            "Configuring quality profiles and quality gates to enforce coding standards.",
            "Analyzing code coverage, technical debt, and code smells.",
            "SonarQube Integration:",
            "Integrating SonarQube with build tools (Maven, Gradle) for automated code analysis.",
            "Using SonarQube plugins for CI/CD tools like Jenkins, GitLab CI/CD, and GitHub Actions.",
            "Generating reports and actionable insights to improve code quality."
          ]
        },
        {
          "id": 2,
          "title": "Snyk for Vulnerability Scanning",
          "content": [
            "Introduction to Snyk:",
            "Overview of software vulnerabilities and their impact on application security.",
            "Features of Snyk for scanning code, dependencies, containers, and IaC files.",
            "Using Snyk for Code and Dependency Scanning:",
            "Setting up Snyk CLI and dashboard for project scanning.",
            "Scanning open-source dependencies for known vulnerabilities.",
            "Monitoring vulnerabilities over time and creating remediation workflows.",
            "Container and IaC Scanning with Snyk:",
            "Analyzing container images for vulnerabilities in base images and application layers.",
            "Scanning Terraform and Kubernetes configuration files for security risks.",
            "Snyk Integration with DevOps Pipelines:",
            "Automating vulnerability scans in CI/CD workflows using Jenkins, GitHub Actions, and GitLab CI/CD.",
            "Generating real-time alerts and vulnerability reports for proactive issue resolution."
          ]
        },
        {
          "id": 3,
          "title": "Maven and Gradle for Dependency and Build Management",
          "content": [
            "Introduction to Build Tools:",
            "Overview of Maven and Gradle as essential tools for Java-based application development.",
            "Key differences between Maven and Gradle.",
            "Maven:",
            "Understanding Maven’s project structure and POM (Project Object Model).",
            "Managing dependencies using Maven Central Repository.",
            "Writing custom goals and plugins for extended functionality.",
            "Automating tests and packaging applications into deployable artifacts.",
            "Gradle:",
            "Introduction to Gradle’s Groovy-based DSL.",
            "Managing dependencies and resolving version conflicts.",
            "Configuring multi-project builds for complex applications.",
            "Optimizing builds with caching and parallel execution.",
            "Advanced Build Automation:",
            "Using Maven and Gradle in conjunction with Jenkins, GitLab CI/CD, and CircleCI for automated builds and testing.",
            "Managing and versioning artifacts with repositories like Nexus or Artifactory."
          ]
        }
      ]
  },
  {
    "id": 7,
    "title": "Module 7",
    "subtitle": "Linux",
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
          "Command-Line Basics:",
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
          "Permissions and Ownership:",
          "File and directory permissions (read, write, execute).",
          "Changing ownership with chown and managing permissions with chmod.",
          "Advanced Permissions:",
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
          "Systemd and Service Management:",
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
          "Firewall Management:",
          "Configuring and managing firewall rules using iptables and firewalld.",
          "Setting up NAT and port forwarding rules.",
          "SSH Configuration:",
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
          "LVM and RAID:",
          "Configuring logical volumes with lvcreate, vgcreate, and pvcreate.",
          "Setting up RAID arrays with mdadm for redundancy and performance.",
          "File System Troubleshooting:",
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
          "Automating Tasks with Cron and At:",
          "Scheduling periodic tasks using cron.",
          "Managing one-time jobs with at and batch.",
          "Industry Use Cases:",
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
          "Source-Based Installation:",
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
          "Performance Optimization:",
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
          "Auditing and Compliance:",
          "Using auditd for tracking system changes and events.",
          "Ensuring compliance with security policies using log auditing."
        ]
      }
    ]
  }
  
  
  
]
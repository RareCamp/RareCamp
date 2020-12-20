# Terminologies
RareCamp operates in the domain of biotechnology / drug discovery that is unfamiliar to most software developers.
This document aims to standardize the terminologies for use within the codebase as well as communication among the
developers. If there is any ambiguity, this document serves as the final authority:

### Disease
A medical condition preventing someone from leading a normal life. In RareCamp, we are primarily dealing with diseases caused by mutations in the DNA (also called genetic diseases).
Diabetes, Hypertension, Anxiety etc are not caused by genetic mutations. On the other hand,
Sickle Cell disease is a genetic disease.

### Patient
Patient is a human with a disease or medical condition.

### Patient Organization
An organization started by patients or relatives to find a treatment for one disease or a family of closely-related 
diseases. 

### Customer
RareCamp's customers are patient organizations. This might change in the future, but this is our current stance.

### User
User is a broad term representing a human using the RareCamp software. A user could be a part of patient organization,
service provider, expert or any other entity.

### Workspace
This is strictly a RareCamp software concept. Workspace is a logical collection of drug development Programs.

### Program
A Program represents a set of activities to find a treatment for the disease using a specific drug development 
technology, drug target or methodology. In RareCamp, a program is the highest logical unit with time/money/outcomes
associated with it.  

### Project
A Project represents an activity necessary to advance the Program forward. Project has a defined goal and a time-bound outcome. A Program is divided into 
several Projects which might have dependencies among them.

### Task
A Task is the smallest unit of work in RareCamp. Tasks should be clear, unambiguous, easy to complete, has 
clearly assigned assignee, and well-understood outcome. Tasks can be assigned to one or more users who is 
responsible for completing the task.

### Service Provider
An organization or entity providing a service to our customers to advance their treatment development Programs.
This could be an organization like a Contract Research Organization or an individual like a consultant providing 
auditing services.

### Expert
An Expert is an individual having deep knowledge in particular area of treatment development process.

### Researcher
An Expert, specifically affiliated with a university or research lab.

### Collaborator
A Customer, Expert, Researcher or anyone working together on a Program

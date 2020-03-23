---
sidebarDepth: 3
---

# JobDetails Component

Displays details about a single Job Post along with the application form

> This component requires the session component from the Rainlab.User plugin

## Properties

There are no properties available for this plugin.

## Example Page Sructure

### Simple

```ini

title = "Job"
url = "/job/:id/view"
layout = "default"
description = "This page displays details of a single job post"
is_hidden = 0

[jobDetails]

[session]
security = "none"
redirect = "home"
==
{% component 'jobDetails' %}

```

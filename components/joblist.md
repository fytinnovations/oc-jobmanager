---
sidebarDepth: 3
---

# JobList Component

Displays a list of Published Job Posts

## Properties

| Value   | Description                                                                                                  | Default | Compulsory |
|---------|--------------------------------------------------------------------------------------------------------------|---------|------------|
| jobPage | Name of the job page file for the full job display.  This property is used by the default component partial. | job     | No         |

## Example Page Sructure

### Simple

```ini

title = "Jobs"
url = "/jobs"
layout = "default"
description = "Displays a list of published jobs"
is_hidden = 0

[jobList]
jobPage = "job"
==
{% component 'jobList' %}

```

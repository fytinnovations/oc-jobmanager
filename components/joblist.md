---
sidebarDepth: 3
next: /getting-started/theme-setup
---

# JobList Component

Displays a list of Published Job Posts

## Properties

| Value   | Description                                                                                                  | Default | Compulsory |
|---------|--------------------------------------------------------------------------------------------------------------|---------|------------|
| jobPage | Name of the job page file for the full job display.  This property is used by the default component partial. | job     | No         |

## Example Implementations

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

### Custom Markup

```ini

title = "Jobs"
url = "/jobs"
layout = "default"
description = "Displays a list of published jobs"
is_hidden = 0

[jobList]
jobPage = "job"
==
{% set jobs = jobList.jobs %}
<div class="list-group">
  {% for job in jobs %}
  <a href="{{jobPage|page({ id: job.id })}}"
    class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="row">
      <div class="col-2">
        <img class="mr-3 mb-1" src="{{job.company.logo.getThumb(100,100)}}" alt="{{job.company.name}}" />
      </div>
      <div class="col-10">
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">{{ job.title }}</h4>
          <small>Posted on : {{ job.created_at|date('M d, Y') }}</small>
        </div>
        <h5>{{ job.company.name }}</h3>
          <p class="mb-1">Category: {{job.category.name}}</p>
          {% if (job.country )%}
          <p class="mb-1">Location: {{job.city }} , {{job.country.name }} , {{job.state.name }}</p>
          {% endif%}
          <p class="mb-1">Positions: {{ job.positions }}</p>
      </div>
    </div>
  </a>
  {% endfor %}
</div>
</main>

```

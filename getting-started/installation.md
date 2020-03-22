---
sidebarDepth: 3
next: /components/joblist
---

# Getting started

## Installation

The `Fytinnovations.JobManager` plugin depends on `RainLab.User`, `RainLab.Location`
and `RainLab.Translate`.

### Via Marketplace

The plugin can be found on the official [October CMS Marketplace](https://octobercms.com/plugin/fytinnovations-jobmanager). You 
can install it via the Projects feature of the Marketplace itself or via your installation's backend settings.

### Via Console

The easiest way to get you started is by using the command line:

```bash
php artisan plugin:install rainlab.user
php artisan plugin:install rainlab.location
php artisan plugin:install rainlab.translate
php artisan plugin:install fytinnovations.jobmanager
```

### Via Github

> Only for users having access to the oc-manager-plugin repository.

Clone the repository inside the plugins directory

```bash
git clone https://github.com/fytinnovations/oc-jobmanager-plugin plugins/fytinnovations/jobmanager
```

Run pending migrations only required when using github.

```bash
php artisan october:up
```

## Configuration

Once your installation is complete, follow the configuration steps below.

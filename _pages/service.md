---
layout: page
title: Service
permalink: /service/
description: 
nav: true
nav_order: 3
display_categories: []
horizontal: false
---

##Conference:

###Senior Area Chair/Area Chair:

+KDD 2025,2026
+ICLR 2026
+IJCNN 2025

###PC member:

+DM: KDD(2019-),ICDM(2025),CIKM(2023-),ECML-PKDD(2024-),IEEE BigData(2024-) 
+IR: SIGIR(2025),WebConf(2024-),RecSys(2024-),WSDM(2024-),ECIR(2026)
+ML: NeurIPS(2024-),ICML(2024-), ICLR(2025), AISTATS(2025-),ACML(2024-)
+AI: AAAI(2024-),IJCAI(2024-),MM(2025)

###Journal Reviewer:

TKDE,PR,KBS,EAAI,ESWA,COSE

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

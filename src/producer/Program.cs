﻿var builder = WebApplication.CreateBuilder(args);

builder.Configuration
    .AddScrapeConfiguration();

builder.Host
    .SetupSerilog(builder.Configuration);

builder.Services
    .RegisterMassTransit()
    .AddDataStorage()
    .AddCrawlers()
    .RegisterWordCollections()
    .AddQuartz(builder.Configuration);

var host = builder.Build();

await host.RunAsync();

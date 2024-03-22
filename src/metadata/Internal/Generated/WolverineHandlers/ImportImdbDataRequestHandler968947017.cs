// <auto-generated/>
#pragma warning disable
using Metadata.Features.Configuration;
using Microsoft.Extensions.Logging;

namespace Internal.Generated.WolverineHandlers
{
    // START: ImportImdbDataRequestHandler968947017
    public class ImportImdbDataRequestHandler968947017 : Wolverine.Runtime.Handlers.MessageHandler
    {
        private readonly Microsoft.Extensions.Logging.ILogger<Metadata.Features.Files.EpisodesFile> _logger4;
        private readonly Microsoft.Extensions.Logging.ILogger<Metadata.Features.Files.BasicsFile> _logger1;
        private readonly Metadata.Features.Configuration.ServiceConfiguration _serviceConfiguration;
        private readonly Microsoft.Extensions.Logging.ILogger<Metadata.Features.ImportImdbData.ImdbDbService> _logger2;
        private readonly Microsoft.Extensions.Logging.ILogger<Metadata.Features.Files.AkasFile> _logger3;
        private readonly Metadata.Features.Configuration.PostgresConfiguration _postgresConfiguration;

        public ImportImdbDataRequestHandler968947017(Microsoft.Extensions.Logging.ILogger<Metadata.Features.Files.EpisodesFile> __logger4, Microsoft.Extensions.Logging.ILogger<Metadata.Features.Files.BasicsFile> __logger1, Metadata.Features.Configuration.ServiceConfiguration serviceConfiguration, Microsoft.Extensions.Logging.ILogger<Metadata.Features.ImportImdbData.ImdbDbService> __logger2, Microsoft.Extensions.Logging.ILogger<Metadata.Features.Files.AkasFile> __logger3, Metadata.Features.Configuration.PostgresConfiguration postgresConfiguration)
        {
            _logger4 = __logger4;
            _logger1 = __logger1;
            _serviceConfiguration = serviceConfiguration;
            _logger2 = __logger2;
            _logger3 = __logger3;
            _postgresConfiguration = postgresConfiguration;
        }



        public override async System.Threading.Tasks.Task HandleAsync(Wolverine.Runtime.MessageContext context, System.Threading.CancellationToken cancellation)
        {
            var imdbDbService = new Metadata.Features.ImportImdbData.ImdbDbService(_postgresConfiguration, _logger2);
            var inline_episodesFile = new Metadata.Features.Files.EpisodesFile(_logger4, imdbDbService);
            var inline_akasFile = new Metadata.Features.Files.AkasFile(_logger3, imdbDbService);
            var inline_basicsFile = new Metadata.Features.Files.BasicsFile(_logger1, imdbDbService);
            var importImdbDataRequestHandler = new Metadata.Features.ImportImdbData.ImportImdbDataRequestHandler(_serviceConfiguration, inline_basicsFile, inline_akasFile, inline_episodesFile);
            // The actual message body
            var importImdbDataRequest = (Metadata.Features.ImportImdbData.ImportImdbDataRequest)context.Envelope.Message;

            
            // The actual message execution
            var outgoing1 = await importImdbDataRequestHandler.Handle(importImdbDataRequest, cancellation).ConfigureAwait(false);

            
            // Outgoing, cascaded message
            await context.EnqueueCascadingAsync(outgoing1).ConfigureAwait(false);

        }

    }

    // END: ImportImdbDataRequestHandler968947017
    
    
}

